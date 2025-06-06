export const data = {
  en: {
    heroSection: {
      greeting: 'Hi! 👋',
      intro:
        "I'm Almila. I'm a full-stack developer. I can craft solid and scalable frontend products. Let's meet!",
      profileImage: '/images/profile-image.jpg',
      socials: [
        {
          logo: '/images/logo-linkeding.jpg',
          darkLogo: '/images/darkmode/logo-linkeding.jpg',
          alt_text: 'linkedin',
          link: 'https://www.linkedin.com/in/busra-yapici-72434514a/',
        },
        {
          logo: '/images/github-white.png',
          alt_text: 'github',
          link: "https://github.com/bsrayapici",
          darkLogo: '/images/github-white.png'
        },
      ],
      ctaHTML:
        'Currently <span class="text-[#E92577]">Freelancing</span> for <span class="text-[#E92577]">UX, UI, & Web Design</span> Project. Invite me to join your team → <a href="mailto:pratamajosi@gmail.com" class="text-[#E92577] underline">pratamajosi@gmail.com</a>',
    },
    skillsSection: {
      title: 'Skills',
      skills: [
        {
          name: 'Javascript',
          icon: "/images/darkmode/js.png",
          
        },
        {
          name: 'React',
          icon: '/images/darkmode/react.png',
        },
        {
          name: 'Node',
          icon: '/images/darkmode/node.png',
        },
        {
          name: 'Figma',
          icon: '/images/figma.png',
        },
        {
          name: 'Redux',
          icon: '/images/darkmode/redux.png',
        },
        {
          name: 'VS Code',
          icon: '/images/darkmode/redux-1.png',
        },
      ],
    },
    profileSection: {
      title: 'Profile',
      experience: {
        title: 'Experience',
        items: [
          {
            role: 'Full Stack Developer',
            company: 'Freelance',
            period: '2022 - Present',
          },
          {
            role: 'Frontend Developer',
            company: 'Tech Corp',
            period: '2020 - 2022',
          },
        ],
      },
      education: {
        title: 'Education',
        items: [
          {
            degree: 'Computer Science',
            school: 'University of Technology',
            period: '2016 - 2020',
          },
        ],
      },
    },
    projectsSection: {
      title: 'Projects',
      items: [
        {
          title: 'Random Jokes',
          description:
            'A fun web app that generates random jokes using a REST API',
          image: '/images/ornek.jpg',
          technologies: ['React', 'Vite', 'Axios'],
          demo: 'https://example.com/demo1',
          github: 'https://github.com/example/random-jokes',
        },
        {
          title: 'Are you bored?',
          description:
            "An interactive app suggesting activities when you're bored",
          image: '/images/ornek_iki.jpg',
          technologies: ['React', 'Redux', 'Axios'],
          demo: 'https://example.com/demo2',
          github: 'https://github.com/example/bored-app',
        },
      ],
    },
    footerSection: {
      title: "Let's work together on your next product.",
    },
  },
  tr: {
    heroSection: {
      greeting: 'Merhaba! 👋',
      intro:
        'Ben Almila. Full-stack geliştiriciyim. Sağlam ve ölçeklenebilir frontend ürünleri üretebilirim. Tanışalım!',
      profileImage: '/images/profile-image.jpg',
      socials: [
        {
          logo: '/images/logo-linkeding.jpg',
          alt_text: 'linkedin',
          link: 'https://www.linkedin.com/in/busra-yapici-72434514a/',
        },
        {
          logo: '/images/github-white.png',
          alt_text: 'github',
          link: 'https://github.com/bsrayapici',
          darkLogo: '/images/github-white.png'
        },
      ],
      ctaHTML:
        'Şu anda <span class="text-[#E92577]">UX, UI ve Web Tasarımı</span> projesi için <span class="text-[#E92577]">Freelance</span> çalışıyorum. Ekibinize katılmam için bana ulaşın → <a href="mailto:pratamajosi@gmail.com" class="text-[#E92577] underline">pratamajosi@gmail.com</a>',
    },
    skillsSection: {
      title: 'Yetenekler',
      skills: [
        {
          name: 'HTML',
          icon: '/images/darkmode/js.png',
        },
        {
          name: 'CSS',
          icon: '/images/darkmode/react.png',
        },
        {
          name: 'JavaScript', 
          icon: '/images/darkmode/node.png',
        },
        { 
          name: 'Figma', 
          icon: '/images/figma.png'
        },
        { 
          name: 'Redux', 
          icon: '/images/darkmode/redux.png'
        },
        { 
          name: 'VS Code', 
          icon: '/images/darkmode/redux-1.png'
        },
      ],
    },
    profileSection: {
      title: 'Profil',
      experience: {
        title: 'Deneyim',
        items: [
          {
            role: 'Full Stack Geliştirici',
            company: 'Serbest',
            period: '2022 - Günümüz',
          },
          {
            role: 'Frontend Geliştirici',
            company: 'Tech Corp',
            period: '2020 - 2022',
          },
        ],
      },
      education: {
        title: 'Eğitim',
        items: [
          {
            degree: 'Bilgisayar Mühendisliği',
            school: 'Teknoloji Üniversitesi',
            period: '2016 - 2020',
          },
        ],
      },
    },
    projectsSection: {
      title: 'Projeler',
      items: [
        {
          title: 'Rastgele Şakalar',
          description:
            'REST API kullanarak rastgele şakalar üreten eğlenceli bir web uygulaması',
          image: '/images/ornek.jpg',
          technologies: ['React', 'Vite', 'Axios'],
          demo: 'https://example.com/demo1',
          github: 'https://github.com/example/random-jokes',
        },
        {
          title: 'Sıkıldın mı?',
          description:
            'Sıkıldığınızda aktiviteler öneren interaktif bir uygulama',
          image: '/images/ornek_iki.jpg',
          technologies: ['React', 'Redux', 'Axios'],
          demo: 'https://example.com/demo2',
          github: 'https://github.com/example/bored-app',
        },
      ],
    },
    footerSection: {
      title: 'Bir sonraki ürününüzde birlikte çalışalım.',
    },
  },
};