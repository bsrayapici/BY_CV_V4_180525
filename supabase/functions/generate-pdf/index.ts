import { jsPDF } from "npm:jspdf@2.5.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

const content = {
  title: "React Öğrenme Yol Haritası",
  sections: [
    {
      title: "1. JavaScript Temelleri (2-3 Hafta)",
      items: [
        "Modern JavaScript (ES6+) özellikleri",
        "Array metodları (map, filter, reduce)",
        "Destructuring, spread operatörü",
        "Promise'lar ve async/await",
        "Arrow functions"
      ]
    },
    {
      title: "2. React Temelleri (3-4 Hafta)",
      items: [
        "JSX syntax",
        "Component yapısı",
        "Props ve state kavramları",
        "Event handling",
        "Conditional rendering",
        "Lists ve keys"
      ]
    },
    {
      title: "3. Pratik Projeler (Başlangıç Seviyesi)",
      items: [
        "To-do list uygulaması",
        "Hesap makinesi",
        "Hava durumu uygulaması",
        "Basit bir blog"
      ]
    },
    {
      title: "4. Önemli React Konuları (4-5 Hafta)",
      items: [
        "Hooks (useState, useEffect, useContext)",
        "Component yaşam döngüsü",
        "Form yönetimi",
        "API çağrıları",
        "Error handling"
      ]
    },
    {
      title: "5. React Ekosistemi (4-5 Hafta)",
      items: [
        "React Router (sayfa yönlendirme)",
        "State management (Context API)",
        "Styled-components veya Tailwind CSS",
        "React Developer Tools kullanımı"
      ]
    },
    {
      title: "6. İleri Seviye Konular",
      items: [
        "Performance optimization",
        "Custom hooks",
        "Code splitting",
        "Testing (Jest ve React Testing Library)",
        "TypeScript ile React"
      ]
    },
    {
      title: "Önerilen Kaynaklar",
      items: [
        "React Resmi Dokümantasyonu (react.dev/learn)",
        "FreeCodeCamp React kursu",
        "Scrimba interaktif React dersleri",
        "YouTube Türkçe React eğitimleri"
      ]
    }
  ]
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const doc = new jsPDF();
    let yPosition = 20;

    // Title
    doc.setFontSize(20);
    doc.text(content.title, 20, yPosition);
    yPosition += 20;

    // Sections
    doc.setFontSize(12);
    content.sections.forEach(section => {
      // Section title
      doc.setFont(undefined, 'bold');
      doc.text(section.title, 20, yPosition);
      yPosition += 10;

      // Section items
      doc.setFont(undefined, 'normal');
      section.items.forEach(item => {
        if (yPosition > 270) {
          doc.addPage();
          yPosition = 20;
        }
        doc.text(`• ${item}`, 25, yPosition);
        yPosition += 7;
      });
      yPosition += 10;
    });

    const pdfBytes = doc.output('arraybuffer');

    return new Response(pdfBytes, {
      headers: {
        ...corsHeaders,
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=react-learning-path.pdf"
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json"
      }
    });
  }
});