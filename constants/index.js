import { icons_abp1, icons_abp2, icons_abp3, icons_apa1, icons_apa2, icons_apa3, icons_aw1, icons_aw2, icons_aw3, icons_bca1, icons_bca2, icons_bca3, icons_bpd1, icons_bpd2, icons_bpd3, icons_bpm1, icons_bpm2, icons_bpm3, icons_ci1, icons_ci2, icons_ci3, icons_ebp1, icons_ebp2, icons_ebp3, icons_fal1, icons_fal2, icons_fal3, icons_gw1, icons_gw2, icons_gw3, icons_pae1, icons_pae2, icons_pae3, portfolio_1, portfolio_2, portfolio_3, portfolio_4, portfolio_5, portfolio_6, portfolio_7, reviews_m1, reviews_m2, reviews_m3, reviews_m4, reviews_w1, reviews_w2, services_1, services_10, services_2, services_3, services_4, services_5, services_6, services_7, services_8, services_9, services_s10_1, services_s10_2, services_s10_3, services_s1_1, services_s1_1_1, services_s1_1_2, services_s1_2, services_s1_2_1, services_s1_2_2, services_s1_3_1, services_s1_4_1, services_s1_4_2, services_s2_1, services_s2_2, services_s3_1, services_s3_2, services_s4_1, services_s4_2, services_s4_2_1, services_s4_3_1, services_s5_1, services_s5_2, services_s6_1, services_s7_1, services_s7_2, services_s7_3, services_s7_4, services_s8_1, services_s8_2, services_s9_1, services_s9_2, services_s9_3 } from "@/public";
import { FaAlignLeft, FaBook, FaBookOpen, FaBullhorn, FaEdit, FaGlobe, FaImage, FaMicrophone, FaPalette, FaPen } from "react-icons/fa";
import { IoCallOutline, IoLocationOutline, IoMailOutline } from "react-icons/io5";
import { PiBuildingOfficeDuotone } from "react-icons/pi";


export const contactDetails = [
  {
    name: "Call Us",
    href: "tel:+19292664429",
    text: "+1 (929) 266 4429",
    icon: IoCallOutline,
  },
  {
    name: "Email Us",
    href: "mailto:info@inknestpublishing.com",
    text: "info@inknestpublishing.com",
    icon: IoMailOutline,
  },
  {
    name: "Location",
    href: false,
    text: "39 Broadway 12th floor, New York, NY 10004",
    icon: IoLocationOutline,
  },
];

export const navigation = [
  {
    title: "Home",
    link: "/",
  },

  {
    title: "Book Publishing",
    link: "/book-publishing",
    dropdown: [
      {
        title: "E-Book Publishing",
        link: "/ebook-publishing"
      },
      {
        title: "Self Publishing",
        link: "/self-publishing"
      },
    ]
  },
  {
    title: "Children's Book Publishing",
    link: "/childrens-book-publishing"
  },
  {
    title: "Audio Book Publishing",
    link: "/audio-book-services"
  },
  {
    title: "Book Marketing",
    link: "/book-marketing-services",
    dropdown: [
      {
        title: "Book SEO and SEM",
        link: "/book-seo-and-sem"
      },
      {
        title: "Digital Marketing",
        link: "/digital-marketing"
      },
    ]
  },
  {
    title: "Services",
    link: false,
    dropdown: [
      {
        title: "Ghost Writing",
        link: "/ghost-writing"
      },
      {
        title: "Proofreading and Editing",
        link: "/proofreading-and-editing"
      },
      {
        title: "Author Website",
        link: "/author-website"
      },
      {
        title: "Customized Illustrations",
        link: "/customized-illustrations"
      },
      {
        title: "Book Cover Art",
        link: "/book-cover-art"
      },
      {
        title: "formatting and Layout",
        link: "/formatting-and-layout"
      },
    ],
  },
  {
    title: "About Us",
    link: "/about",
  },
];

export const roundSlider = [
  "/images/portfolio/1.avif",
  "/images/portfolio/2.avif",
  "/images/portfolio/3.avif",
  "/images/portfolio/4.avif",
  "/images/portfolio/5.avif",
  "/images/portfolio/6.avif",
  "/images/portfolio/7.avif",
];

export const servicesList = [
  {
    id: 1,
    title: "Book Publishing and Distribution",
    link: "/book-publishing",
    img: services_1,
    icon: FaBook,
    text:
      "Your manuscript, one global launch. Publish once and have a worldwide presence with a hassle-free distribution through one of the top ten publishing companies."
  },
  {
    id: 2,
    title: "E-Book Publishing",
    link: "/ebook-publishing",
    img: services_2,
    icon: FaBookOpen,
    text:
      "We take your eBook through the process, whether in editing or marketing, across all platforms. Publish your work with our state-of-the-art ebook publishing service to the world."
  },
  {
    id: 3,
    title: "Proofreading and Editing",
    link: "/proofreading-and-editing",
    img: services_3,
    icon: FaEdit,
    text:
      "We transform scrap drafts into gold literature. Our professional editors make sure that your story is clean, clear, and convincing."
  },
  {
    id: 4,
    title: "Book Promotions and Marketing",
    link: "/book-marketing-services",
    img: services_4,
    icon: FaBullhorn,
    text:
      "We ignite visibility for any title we work on. Through clever strategies or social buzz, our marketing rekindles reader curiosity and sales."
  },
  {
    id: 5,
    title: "Author Website",
    link: "/author-website",
    img: services_5,
    icon: FaGlobe,
    text:
      "There should be a home for every author online. We design beautiful online platforms that present your work, help you establish your online presence, and bring you close to your viewers."
  },
  {
    id: 6,
    title: "Customized Illustrations",
    link: "/customized-illustrations",
    img: services_6,
    icon: FaPalette,
    text:
      "Make imagination come alive. Our artists create artworks that are appealing and that match the spirit of your story."
  },
  {
    id: 7,
    title: "Book Cover Art",
    link: "/book-cover-art",
    img: services_7,
    icon: FaImage,
    text:
      "The first impression is everything; we believe in that. Our designers produce eye-catching covers, which are attention-grabbing and curiosity-provoking."
  },
  {
    id: 8,
    title: "Audio Book Narration and Publishing",
    link: "/audio-book-services",
    img: services_8,
    icon: FaMicrophone,
    text:
      "Turn the page on sound. We give your book a voice of a professional narrator and broad distribution in audio."
  },
  {
    id: 9,
    title: "formatting and Layout",
    link: "/formatting-and-layout",
    img: services_9,
    icon: FaAlignLeft,
    text:
      "Slick and businesslike, cover to content. We customize designs to perfection, both in print and digital."
  },
  {
    id: 10,
    title: "Ghost Writing",
    link: "/ghost-writing",
    img: services_10,
    icon: FaPen,
    text:
      "Have the story but not the time? Our best-in-class ghostwriters create influential books under your name, and they are ready to meet the world."
  }
];

export const testimonials = [
  {
    author: "Nini Karlina",
    title: "Author of Ignite Your Motivation in 7 Days",
    img: reviews_w1,
    comment:
      "As a first-time author, I was overwhelmed by the process of turning my ideas into a published book—but Western Book Publishing simplified everything. Their team helped me organize my content, format the manuscript for Kindle, and even provided feedback to make the structure more impactful. Thanks to their support, my book looks polished, reads smoothly, and is now live on Amazon. I’m incredibly grateful for their professionalism and would absolutely work with them again.",
  },
  {
    author: "Larry J. Kachik",
    title: "M.D. – Author of Dying Was Easy (Zachary Zander Series)",
    img: reviews_m1,
    comment:
      "Working with Western Book Publishing, and especially my project manager Casper William, was one of the best decisions I made for my book. Casper understood the tone and complexity of my medical thriller and made sure every detail—from manuscript formatting to cover design—reflected the intensity and professionalism I envisioned. The entire team was responsive, reliable, and genuinely cared about getting it right. I’m proud of what we created together, and I look forward to continuing the series with them.",
  },
  {
    author: "Nate Stack",
    title: "Author of Voodoo War",
    img: reviews_w2,
    comment:
      "From the first call to the final upload, Western Book Publishing delivered exactly what they promised. Chris Parker, my front-line manager, ensured the onboarding was smooth, clearly explained the independent publishing process, and helped me retain full rights and royalties to my work. He walked me through every step, making sure I understood the options and had full control. The back-end team was equally sharp—fast, responsive, and skilled. I couldn’t have asked for a better crew to bring Voodoo War to life.",
  },
  {
    author: "Daniel DellaVecchia",
    title: "Author of The Adventures of the Doppelganger Kids",
    img: reviews_m2,
    comment:
      "Creating a meaningful children’s book with both heart and message required more than just words—it needed the right visuals too. Frank Mile from Western Book Publishing was instrumental in guiding my illustrator through every requirement, helping us align on style, emotion, and message. He really understood my vision and worked closely with us to bring it to life. Thanks to Frank and the team, The Adventures of the Doppelganger Kids came out exactly how I imagined—vibrant, thoughtful, and impactful.",
  },
  {
    author: "Duo Farsi Kids Books",
    title: "Author of Koja Hasti – Where Are You?",
    img: reviews_m3,
    comment:
      "Bringing a bilingual Persian-English children’s book to life was a challenge we didn’t want to trust just anyone with—but Western Book Publishing exceeded expectations in every way. Their team handled the complexities of Persian script, phonetics, and layout with care and precision. From typesetting to page design to adding audio resources, they helped us create a vibrant, accessible, and educational experience for young readers. Thanks to their multilingual publishing capabilities, Koja Hasti – Where Are You? is now reaching families across the world in multiple languages.",
  },
  {
    author: "Niels Larsson",
    title: "Author of The Shield Wall: Book One of The Saga of Yggdrasil",

    img: reviews_m4,
    comment:
      "Writing an epic like The Shield Wall—with its mix of Norse mythology, science fiction, and layered world-building—was one thing. Turning it into a clean, immersive Kindle edition was another challenge entirely. Western Book Publishing handled the formatting, structure, and pacing with complete professionalism. They respected the complexity of my vision and ensured everything—from chapter breaks to psychic warfare terminology—was perfectly aligned. Their insight made my debut not only readable, but truly impactful. I trusted them with my saga, and they delivered.",
  },
];

export const faqs = [
  {
    title: " How are my royalties disbursed?",
    ans: "We directly transfer your royalties to your bank account, with no deductions on our end. The only fee applied is from the marketplace (Amazon, Barnes & Noble, etc.)."
  },
  {
    title: "Can I select the ink quality, paperweight, and book size for my publication?",
    ans: "Absolutely. You have full control over your book’s design specifications."
  },
  {
    title: "Where will my book be available for sale and distribution?",
    ans: "Your book will be listed on top platforms including Amazon book publishing, Barnes & Noble, Kobo, Apple Books, and more."
  },
  {
    title: "Do I retain the copyright to my book?",
    ans: "Yes, 100%. You own the full rights to your work."
  },
  {
    title: "Are there any undisclosed expenses?",
    ans: "None at all. We value transparency and will always provide a full breakdown of all costs."
  },
];

export const services = [
  {
    title: "Book Publishing and Distribution",
    link: "/book-publishing",
    hero: {
      title: "Materialize Your Dreams with Book Publishing Services",
      text: `Well, you wrote a book or are in the process of doing so and now you are saying, \"How do I go about getting my book published?\" And this is where we enter. <br/> Our job at Western Book Publishing is not to provide publishing services to a book and that is it we are with you, through all the stages of evolution of your book, until you have your book in the hands of a reader! Hoping to write the best book or simply wish to see your story on shelves, we have established a system that is easy, professional, and definitely aimed at authors like you.`,
    },
    service_body: [
      {
        title: "Looking For Professional Book Publishing Services? You’re At The Right Place",
        text: [
          "Ready to have your book out then? Our best-in-class Book Publishing Services can help you actualize that dream. We do not only make your book publishing a success; we also take care of all the background work, so that you concentrate on your writing. Whether it is fine-tuning the format of your manuscript, designing the best cover, or even posting it to internet sites, we can do it all.",
          "Need not be troubled about anything. You may ask yourself: how to list my book online? Or what is the most effective way to reach readers? We have the answers. Our professional team makes your book glitter, page in, page out."
        ],
        img: services_s1_1,
        shadow: true
      },
      {
        title: "Why Choose Western Book Publishing?",
        text: "When it comes to publishing, Western is all about selecting service partner who has the knowledge of what it is all about: to bring a book to life. We understand how intimidating it can be to guide yourself through the publishing world; that is why we have created a process that is smooth, streamlined, and customized. We have experts with years of experience backed by a deep interest in storytelling, and your book will be given the due attention right through the process.",
        img: services_s1_2
      }
    ],
    sec2: {
      title: "Amazon Publishing Solutions Built to Help You Stand Out and Sell More",
      text: "Is Amazon’s publishing process confusing or time-consuming? With millions of books live on Amazon, launching your book properly is the difference between visibility and invisibility. At Western Book Publishing, we take the guesswork out of Amazon KDP. We offer full support including cover and interior formatting, metadata research, category selection, keyword targeting, and A+ content guidance. Our Amazon experts know how to position your book for discoverability and engagement, whether in paperback, hardcover, or Kindle formats. From first-time authors to seasoned storytellers, we help you publish confidently on the world’s biggest platform."
    },
    wwd: [
      {
        title: "Book Illustration",
        text: "No matter the genre, our team is professionally trained to tackle any task, providing top-notch work without compromising on any aspect of your book.",
        icon: icons_bpd1
      },
      {
        title: "Book Publishing",
        text: "Get all the publishing services you need to create your book & eBook. Develop your content, design your book cover, market your book with Western.",
        icon: icons_bpd2
      },
      {
        title: "Book Marketing",
        text: "Book Marketing services. Learn the skills you need to find more readers, engage your audience, and sell books like a professional author.",
        icon: icons_bpd3
      }
    ],
    faq: true,
    questionnaire: [
      {
        title: "How long does it take to publish my book?",
        ans: "The timeline varies based on your book's complexity and the services you require. On average, the process takes about 4–8 weeks, from formatting and design to final distribution."
      },
      {
        title: "Do I need to have a completed manuscript before starting the publishing process?",
        ans: "Yes, having a finished manuscript is ideal, but if you’re still in the editing process, we can help guide you through the necessary steps to get it publication-ready."
      },
      {
        title: "Will I retain the rights to my book?",
        ans: "Absolutely! With Western, you keep full ownership and control of your work. We’re here to support you in sharing it with the world, not take ownership of it."
      },
      {
        title: "What platforms do you distribute to?",
        ans: "We distribute to major online platforms, including Amazon, Apple Books, Barnes & Noble, Kobo, and many more, ensuring your book reaches readers across the globe."
      },
      {
        title: "Do you offer marketing services for my book?",
        ans: "Yes! We provide marketing support, including social media promotion, email campaigns, and book launch strategies, to help you increase visibility and drive sales."
      }
    ],
    servicesCard: servicesList.filter(({ id }) => [1, 2, 3, 6, 7, 9, 10].includes(id)),
  },

  {
    title: "E-Book Publishing",
    link: "/ebook-publishing",
    hero: {
      title: "We allows you to share your story with everyone across the globe",
      text:
        "Western Book Publishing is here to help make your journey a breeze. Our dedicated team is committed to assisting your every step of the way, from assigning a project manager to book designers, editors, illustrators, and marketing experts. We want to make sure that your book gets the attention and care it deserves.",
    },
    service_body: [
      {
        title: "Tailored Publishing Strategies for Your Book's Digital Success",
        text: "We use our skills to create one-of-a-kind strategy plans that highlight the unique aspects of your book and connect with your target audience. We can improve the visibility of your book and attract the interest of those who wish to discover your digital masterpiece by using a range of digital channels.",
        img: services_s2_1
      },
      {
        title: "Advantage of signing up with Western Book Publishing",
        text: "Every author has different publication demands, and we at Western Book publication are aware of this. Our team of skilled editors, designers, and marketers is there to assist you at every stage, from the first manuscript review to the book's release and beyond. We take great satisfaction in our focus on accuracy and dedication to excellence.",
        img: services_s2_2
      }
    ],
    sec2: {
      title: "E-Book Publishing Services to Digitally Transform Your Manuscript into A Dream Book",
      text: "Have a finished manuscript but unsure how to convert it into a professionally published e-book?  Publishing digitally opens your book to a global audience, and our e-book publishing service ensures that journey is seamless and success-driven. At Western Book Publishing, we don’t just convert your manuscript into a file. We create high-quality, interactive, and responsive eBooks optimized for all major platforms, Kindle, Apple Books, Kobo, Nook, and more. Our process includes proper ePub/MOBI formatting, embedded table of contents, clickable chapter links, and custom layout styling that adapts to all screen sizes. We also assist with metadata, cover integration, and retail uploading, ensuring your e-book not only looks perfect but performs in stores."
    },
    wwd: [
      {
        title: "Paperback",
        text: "You can find all of the printing and self-publishing services you need for your paperback book right here at Western.",
        icon: icons_ebp1
      },
      {
        title: "Hardcopy",
        text: "Western offers every service you need, all under one roof with hardcover format design.",
        icon: icons_ebp2
      },
      {
        title: "Audio Book",
        text: "If you're an author or a publisher looking to extend your reach to a vast audience, then you might want to consider our specialized Western Audio Book Services.",
        icon: icons_ebp3
      }
    ],
    faq: true,
    servicesCard: servicesList.filter(({ id }) => [1, 2, 3, 6, 7, 9, 10].includes(id)),
  },

  {
    title: "Proofreading and Editing",
    link: "/proofreading-and-editing",
    hero: {
      title: "Light up on Western Book Publishing Editing & Proofreading that Enhances Your Manuscript",
      text:
        "For top-notch book editing and proofreading services, trust Western Book Publishing. Our experienced editors enhance clarity, coherence, and quality, ensuring your book is error-free and engaging.",
    },
    service_body: [
      {
        title: "Western Book Publishing’s expert book proofreading services",
        text: "Are you in the process of completing your book manuscript for publication? Take no chances with proofreading errors! Our professional proofreaders will fix any grammatical errors, typos, and inconsistencies.",
        img: services_s3_1
      },
      {
        title: "Western Book Publishing Methodology for Expert Book Editing",
        text: "From grammar and spelling to storyline and character development, our skilled editors have a keen eye for detail and a strong desire to help writers like you thrive.",
        img: services_s3_2
      }
    ],
    sec2: {
      title: "So, Is Your Manuscript Great, But Not Quite Ready?",
      text: "Even the strongest story can suffer from small errors that turn off readers. Our experienced editors at Western Book Publishing don’t just correct typos and grammar, they refine your voice, improve flow, and enhance clarity. Whether you need light proofreading or in-depth developmental editing, we tailor our services to match your needs and genre. We understand tone, audience, and market standards, ensuring your book is not only clean but compelling. First impressions matter, and a professionally edited book helps you stand out in a crowded market."
    },
    wwd: [
      {
        title: "Book Proofreading",
        text: "Get help proofreading your writing for errors in grammar, spelling, punctuation, and formatting.",
        icon: icons_pae1
      },
      {
        title: "Professional Book Editing",
        text: "The best way to ensure your book is perfectly polished before it’s in print is to invest in professional editing and writing services.",
        icon: icons_pae2
      },
      {
        title: "Book Writing",
        text: "Our Book Writing Service is dedicated to helping authors turn their dreams into published reality.",
        icon: icons_pae3
      }
    ],
    faq: true
  },

  {
    title: "Book Promotions and Marketing",
    link: "/book-marketing-services",
    hero: {
      title: "Where Stories Take Flight, Not Just Shelf Space",
      text: `You did not write your book so that it can accumulate digital dust. We do more than list your book at Western Book Publishing; we launch it. <br/> Whether you are a first-time self-publisher or re-launching a backlist book, our Book Marketing Services will ensure your book receives the promotion it deserves by targeting the right market with passion and proven methods.`,
    },
    service_body: [
      {
        title: "Marketing Know-How",
        text: "We access 50+ data points to match your book with the readers who are already searching for it, through Amazon searches, email campaigns, and more.",
        img: services_s4_1
      },
      {
        title: "So what makes us special?",
        text: "Cookie-cutter is not our thing. Every author we collaborate with receives a bespoke marketing plan that we craft just for you - after all, no one story should have the same spotlight.",
        img: services_s4_2
      }
    ],
    sec2: {
      title: "Wrote a Great Book But Struggling to Get Readers?",
      text: "Ready to get the most professional book marketing services? Writing the book is just the beginning, getting noticed takes strategy, professional marketing. At Western Book Publishing, we help authors stand out through powerful book marketing campaigns designed to reach real readers. Our services include Amazon ads, social media marketing, press release creation, email outreach, and influencer engagement. Whether you’re looking for organic growth, paid promotions, or a mix of both, we tailor each plan to suit your goals and genre. With data-driven insights and creative execution, we help turn quiet book launches into buzzworthy moments."
    },
    wwd: [
      {
        title: "Social media Buzz",
        text: "We assist in creating an attractive online presence that magnetically attracts an audience, expands your author brand, and cultivates discussions that turn into a loyal fan base.",
        icon: icons_bpm1
      },
      {
        title: "Online ad campaigns",
        text: "Whether it's Google or Goodreads, we target our advertising campaigns to bring real clicks, real interest, and real performance, all supported by smart data and clever positioning.",
        icon: icons_bpm2
      },
      {
        title: "Book Marketing Plan",
        text: " We do not just market your book, we position it. Our group of professionals develops a unique marketing planning process that makes your story come to reality and ties it to the intended target audience.",
        icon: icons_bpm3
      }
    ]
  },

  {
    title: "Author Website",
    link: "/author-website",
    hero: {
      title: "Establish Your Signature Space Online",
      text:
        "In today’s digital landscape, your author website is more than a static profile it’s your central hub to engage with readers, share your story, and cultivate a loyal community. It’s where your literary journey comes to life. But creating a site that truly captures your essence can feel overwhelming. That’s where we step in. We help you: Connect deeply with readers, Grow your following organically and Take ownership of your online presence.With personalized design and interactive features, we ensure your website doesn’t just exist it resonates. Let your words build bridges, spark conversations, and create lasting impact.",
    },
    service_body: [
      {
        title: "Why do you need an author website?",
        text: [
          "In today's digital age, having an online presence is crucial for any author who wants to succeed. Your website is your virtual storefront, and it's where readers go to learn more about you, your books, and your writing process. By having a professional and engaging author website, you can: Increase your visibility and improve your ranking in search results and attract more traffic to your site.By providing valuable content, such as blog posts, book reviews, and sneak peeks of upcoming books, on your website, you can engage your readers and build a community around your brand.",
          "At our company, we offer a wide range of Author Website Services to help you achieve your goals. Some of our most popular services include:",
        ],
        details: [
          {
            title: "AUTHOR WEBSITE DESIGN",
            text: "Our designers will build a stunning, professional author site that mirrors your brand and stays intuitive, user-friendly, and mobile-ready."
          },
          {
            title: "AUTHOR WEBSITE TEMPLATES",
            text: "Need something quick and hassle-free? Choose from our range of customizable templates, each built to be visually appealing, user-friendly, and fully optimized for search engines."
          },
          {
            title: "BUILD A STRONG ONLINE PRESENCE",
            text: "In today’s digital age, success starts online. We craft professional, engaging websites that showcase your work, elevate your brand, and attract a wider audience."
          },
          {
            title: "CONNECT WITH READERS",
            text: "Turn your site into a true engagement hub. Our features help you interact with readers, foster deeper connections, and grow a loyal fanbase that supports your career."
          },
          {
            title: "CUSTOMIZED DESIGN",
            text: "Every author is unique. We offer bespoke design services to create a site that mirrors your personality and genre, ensuring readers enjoy an immersive browsing experience."
          },
          {
            title: "USER-FRIENDLY NAVIGATION",
            text: "We put usability first, structuring menus and pages so visitors can quickly find—and stay on—the content that matters most."
          },
          {
            title: "AFFORDABLE PRICING",
            text: "High quality shouldn’t break the bank. We tailor packages to your needs and budget, so you can achieve your goals cost-effectively."
          }
        ],
        img: services_s5_1,
      },
      {
        title: "Let’s Build Your Online Presence Together",
        text: "At our company, we pride ourselves on offering top-notch Author Website Services that are designed to help authors achieve their goals and promote their books to a wider audience. Whether you need help building a website from scratch, or just need some professional guidance and support, we have the expertise and resources to help you succeed. So what are you waiting for? Contact us today to learn more about our Author Website Services and how we can help you take your career to the next level. Let's build your online presence together!",
        img: services_s5_2
      }
    ],
    sec2: {
      title: "Don’t Have a Website Yet as an Author? You Might Be Missing On Too Much",
      text: "Your author website is your digital storefront, it’s where readers, media, and industry professionals come to learn more about you and your books. At Western Book Publishing, we design beautiful, responsive websites that reflect your unique brand and help convert curiosity into sales. Whether you want to build an email list, host a blog, link to retailers, or showcase reviews, we’ll craft a professional site that grows with your career. No tech headaches, just clean design and clear messaging."
    },
    wwd: [
      {
        title: "Custom Design & Branding",
        text: "Layouts, typography, and color palettes tailored to your genre and personality.",
        icon: icons_aw1
      },
      {
        title: "Reader Engagement Tools",
        text: "Blogs, mailing lists, comment sections, and social integrations built right in.",
        icon: icons_aw2
      },
      {
        title: "E-Commerce Integration",
        text: "Direct-to-reader sales via Amazon, PayPal, or your preferred storefront.",
        icon: icons_aw3
      }
    ]
  },

  {
    title: "Customized Illustrations",
    link: "/customized-illustrations",
    hero: {
      title: "A Book Publishing Company That Redefines the Way Books Are Published",
      text:
        "Welcome to Western Book Publishing, where we redefine traditional publishing methods. Our groundbreaking approach challenges norms and sets new industry benchmarks. With a focus on creativity, efficiency, and author empowerment, we revolutionize the process of bringing books to life. Join us on this thrilling adventure as we transform the book industry, ushering in a game-changing era of limitless creativity and greatness just around the corner.",
    },
    service_body: [
      {
        title: "Customized Illustration Services",
        text: "Bring your vision to life with our bespoke illustration offerings, tailored to match your story’s tone, characters, and target audience. At Western Book Publishing, illustration isn’t an add-on  it’s a storytelling powerhouse. We collaborate closely with authors to understand their vision and deliver artwork that elevates every page. Whether you’re publishing a children’s book, graphic novel, or a richly illustrated memoir, our design team is ready to craft visuals that leave a lasting impact.",
        img: services_s6_1
      }
    ],
    sec2: {
      title: "Need Art That Truly Captures Your Story’s Essence? Give Shot To Our Customized Illustrations Today!",
      text: "Stock images don’t cut it when your book demands originality. Our customized illustration services pair you with skilled artists who specialize in tailored artwork that fits your vision, genre, and audience. Whether you need character art, chapter headers, or full-page scenes, we deliver high-resolution, print-ready illustrations with unlimited creative input from you. Your ideas, our artistic execution, it’s a true collaboration from sketch to final design."
    },
    wwd: [
      {
        title: "Children’s Book Illustrations",
        text: "We create whimsical, age-appropriate art that sparks imagination and makes every page pop for young readers.",
        icon: icons_ci1
      },
      {
        title: "Scene-to-Scene Storyboarding",
        text: "Panel layouts that map pacing, perspective, and emotion for a seamless reader journey.",
        icon: icons_ci2
      },
      {
        title: "Cover & Spot Illustrations",
        text: "High-impact covers and interior vignettes that elevate your book’s professional finish.",
        icon: icons_ci3
      }
    ],
    faq: true
  },

  {
    title: "Book Cover Art",
    link: "/book-cover-art",
    hero: {
      title: "Get Noticed with Expert Cover Design by Western Book Publishing",
      text:
        "At Western Book Publishing, we understand that, fair or not, readers really do judge a book by its cover. And that’s exactly why your cover has to do more than just \"look good\" it needs to tell a story, spark emotion, and demand attention on both crowded bookshelves and noisy digital platforms.",
    },
    service_body: [
      {
        title: "Get A Premium Book Cover Design for Your Manuscript",
        text: [
          "Your book is one of a kind, shouldn’t your cover be too? At Western Book Publishing, we believe your book cover should reflect the soul of your story, not come from a one-size-fits-all template. That’s why every design we create is custom-built from scratch—tailored to your genre, mood, audience, and message.",
          "Our professional book cover designers take the time to understand your creative vision. From preferred color palettes and typography to visual tone and market trends, we ensure your final cover is both visually stunning and Amazon-ready. Whether you're writing a dark thriller, lighthearted romance, or powerful nonfiction, we create custom book cover designs for Amazon and beyond that resonate with readers and convert clicks into sales."
        ],
        img: services_s7_1,
        shadow: true
      },
      {
        title: "Affordable, High-Quality Book Covers Without Breaking the Bank",
        text: [
          "You don’t need to break the bank to get a book cover that turns heads and drives clicks. At Western Book Publishing, we deliver top-notch digital book cover designs at prices indie authors and self-publishers can afford. Our design team specializes in scroll-stopping, high-resolution covers tailored for platforms like Amazon Kindle, Barnes & Noble, and Apple Books all optimized to look stunning even as thumbnails.",
          "With a focus on clarity, contrast, and conversion, we create affordable book covers that don’t just look great, they work. Whether you’re launching your first ebook or writing a sequel, we blend visual impact with smart marketing to make your story shine online."
        ],
        img: services_s7_2
      },
      {
        title: "Professional Book Cover Design for Every Genre, Every Story",
        text: [
          "Writing a fantasy epic? A heart-wrenching memoir? A bold business book? No matter the genre, your cover should speak the language of your story. At Western Book Publishing, we specialize in creating genre-specific, market-smart book covers that instantly connect with the right readers.",
          "We know what works in each category from vibrant, playful designs for children’s books to sleek, powerful looks for nonfiction titles. Our designers don’t just follow trends, we help set them. That’s why authors across genres keep coming back, trusting us to create covers that are visually stunning, emotionally resonant, and ready to sell. "
        ],
        img: services_s7_3
      },
      {
        title: "One-Stop Solution for Eye-Catching Book Covers & Seamless Amazon Book Publishing",
        text: [
          "At Western Book Publishing, our design team doesn’t just follow templates we think outside the box to bring your vision to life. Every cover we create is part of a collaborative, end-to-end process that goes far beyond just making things look good.",
          "Once your design is complete, we take care of all the technical details: spine width, back cover layout, barcode placement, and ISBN integration—so your cover is ready for both print and digital platforms. Whether you're publishing through Amazon KDP, IngramSpark, or traditional printing, we’ll deliver fully formatted, press-ready files that meet every specification. We’re with you every step of the way from the first creative sketch to your final upload."
        ],
        img: services_s7_4
      },
    ],
    sec2: {
      title: "Is Your Cover Stopping Readers, or Drawing Them In? Explore A Whole New Side Of The Most Creative Book Covers",
      text: "A professionally designed book cover doesn’t just look good, it sells. At Western Book Publishing, we design covers that match your genre, grab attention, and encourage clicks and purchases. We study reader psychology and market trends, ensuring your design is competitive and compelling. Whether it’s bold, whimsical, dramatic, or minimalist, we bring your story’s soul to life on the cover. Custom fonts, vibrant color palettes, and expert composition are just the beginning."
    },
    wwd: [
      {
        title: "Creative Brainstorm & Concept Sketches",
        text: "We start by understanding your book’s theme, tone, and target readers then bring ideas to life with rough concepts and sketches.",
        icon: icons_bca1
      },
      {
        title: "Custom Cover Design",
        text: "Our designers craft a unique, eye-catching cover that reflects your story and grabs attention no templates, just original work.",
        icon: icons_bca2
      },
      {
        title: "Technical Formatting & Final Files",
        text: "We handle spine sizing, barcode placement, back cover layout, and ISBN setup. You get ready-to-upload files for Amazon KDP, IngramSpark, or your preferred printer.",
        icon: icons_bca3
      }
    ],
    faq: true
  },

  {
    title: "Audio Book Narration and Publishing",
    link: "/audio-book-services",
    hero: {
      title: "VOICE YOUR VISION WITH PREMIUM AUDIOBOOK PUBLISHING",
      text:
        "The process of publishing audiobooks is in our hands at Western Book Publishing, and we make your pens speak. Whether you want to soundize your debut novel or turn your tenth masterpiece into a hit, our team works over the minutiae to ensure the best experience. We offer everything required in audiobook creation and distribution, including professional audiobook narration services that will ensure that your story is presented to the right people the way they prefer to listen to it.You concentrate on storytelling--we provide the voice, the finishing, and the outreach.",
    },
    service_body: [
      {
        title: "BRING YOUR STORY TO LIFE WITH EXPERT AUDIOBOOK CREATION",
        text: [
          "Western Book Publishing takes pages and makes them performances with the best audiobook publishing services at your price and in the style and rhythm of your story. Our audiobook development system was built to exemplify captivation, whether you are an indie author or a longstanding publisher.",
          "Our over 10 years of industry experience crew, consisting of experienced editors, producers, and professional narrators, provides you with the world-level services in audio narration of your words. Whether it be voice casting and direction, sound design, and final mastering, each step of the process is done with craft and attention.",
          "You write. We voice. We are collaborating to bring audiobooks that are as powerful as they are read."
        ],
        img: services_s8_1
      },
      {
        title: "TAKE YOUR VOICE GLOBAL WITH STRATEGIC AUDIOBOOK PROMOTION",
        text: [
          "Audiobook publishing is only part of the game; distribution is where things truly begin. Western Book Publishing does not merely facilitate the production of audiobooks; we work with worldwide distribution and publish audiobooks to the right ears.",
          "Whether it is Audible and Spotify or Apple Books and foreign audiobook bookstores, we sell across the leading marketplaces. We apply smart metadata, keyword optimization, and support with launches that help your title gain ratings and get listened to by interested audiences across the globe.",
          "Make your story go places, farther, louder, and with a point."
        ],
        img: services_s8_2
      }
    ],
    sec2: {
      title: "Thinking of Turning Your Book into an Audiobook But Don’t Know Where to Start?",
      text: "Audiobooks are booming, and your story deserves to be heard, literally. At Western Book Publishing, we handle the entire audiobook process: selecting the perfect narrator, recording in professional studios, editing, mastering, and publishing to platforms like Audible, iTunes, and Spotify. Whether you want a soothing voice for a memoir or theatrical narration for fiction, we offer voice talent that matches your book’s tone and audience. We also ensure your files meet industry standards for seamless platform approval."
    },
    benefits: {
      title: "Our Audiobook Services",
      text: [
        "At Western Book Publishing, we offer complete audiobook publishing solutions designed to turn your written story into a captivating listening experience. Whether you're an indie author or a large publisher, we handle the entire audiobook creation process with precision—from voice casting and narration to editing and mastering.",
        "Our professional audiobook narration services feature handpicked voice talents that match your tone, genre, and audience. Every production is polished for clarity, engagement, and platform compatibility, ensuring your audiobook is ready for distribution across Audible, Apple Books, Spotify, and more.",
        "Let your voice reach beyond the page—because your story deserves to be heard."
      ]
    },
    wwd: [
      {
        title: "Professional Audiobook Narration",
        text: "Our audiobook narration services feature skilled voice actors who transform your manuscript into an immersive listening experience—bringing depth, tone, and emotion to every word.",
        icon: icons_abp1
      },
      {
        title: "End-to-End Audiobook Production",
        text: "We handle the complete audiobook creation process—recording, editing, mastering, and quality control—ensuring a polished, industry-standard product ready for global platforms.",
        icon: icons_abp2
      },
      {
        title: "Marketing & Global Distribution",
        text: "Your story deserves to be heard. Our audiobook publishing team strategically promotes and distributes your audiobook across Audible, Apple Books, Spotify, and more—targeting the right listeners worldwide.",
        icon: icons_abp3
      }
    ]
  },

  {
    title: "Formatting and Layout",
    link: "/formatting-and-layout",
    hero: {
      title: "Western’s Signature Style: Consistent Font and Layout That Reflects Your Genre",
      text: `At Western, we go beyond simple formatting we tailor the typography and paragraph structure to reflect your genre and brand identity. From romance novels to business guides, we ensure your manuscript maintains a uniform font, size, and style throughout, giving your book a polished, professional finish that elevates the reading experience.`,
    },
    service_body: [
      {
        title: "Western Precision: Flawless Page and Margin Alignment for Print and Digital Excellence",
        text: "Uneven margins and clumsy page breaks can distract your reader. That’s why Western ensures industry-standard alignment chapter spacing, and layout precision for every page. Whether it's a paperback, hardcover, or eBook your readers will enjoy a seamless and visually appealing experience—every time they turn the page.",
        img: services_s9_1
      },
      {
        title: "Western Visual Harmony: Smart Image & Table Placement That Complements Your Story",
        text: "Your visuals matter. At Western, we expertly integrate images, tables, and charts into your manuscript—resizing, aligning, and captioning them for maximum impact. Whether it’s a memoir, cookbook, or instructional manual, we ensure your visuals are supportive, clear, and never disruptive to the reader’s journey.",
        img: services_s9_2
      },
      {
        title: "Western Digital Ready: Seamless eBook Conversion for All Major Platforms",
        text: "Going digital? We convert your book into device-friendly formats for Kindle, iPad, and more while maintaining layout integrity. With a clickable table of contents, responsive formatting, and clean chapter transitions, Western guarantees your eBook delivers a glitch-free, engaging experience for every reader—on every device.",
        img: services_s9_3
      },
    ],
    sec2: {
      title: "Worried Your Book Might Look Unprofessional Inside? Your Book Needs Expert Book Formatting & Layout Services",
      text: "Great content deserves a great presentation. Our formatting and layout services ensure your manuscript looks flawless in both print and digital formats. We handle spacing, font consistency, chapter headers, page numbering, TOC generation, and more, all tailored for platforms like Amazon KDP, IngramSpark, and Barnes & Noble Press. From novels to non-fiction to illustrated books, we ensure your final product meets reader expectations and industry standards. No templates. Just clean, readable, professional interiors."
    },
    wwd: [
      {
        title: "Professional Formatting",
        text: "Consistent fonts, sizes, spacing, and headers deliver a seamless reading experience.",
        icon: icons_fal1
      },
      {
        title: "Custom Layout & Visuals",
        text: "Strategic placement of images, charts, and tables enhances comprehension and appeal.",
        icon: icons_fal2
      },
      {
        title: "eBook Conversion",
        text: "Device-friendly files for all major platforms with zero layout glitches.",
        icon: icons_fal3
      }
    ],
    faq: true
  },

  {
    title: "Ghost Writing",
    link: "/ghost-writing",
    hero: {
      title: "Western Book Publishing Redefines the Way Books Are Published",
      text:
        "Welcome to Western Book Publishing, where we redefine traditional publishing methods. Our groundbreaking approach challenges norms and sets new industry benchmarks. With a focus on creativity, efficiency, and author empowerment, we revolutionize the process of bringing books to life. Join us on this thrilling adventure as we transform the book industry, ushering in a game-changing era of limitless creativity and greatness just around the corner.",
    },
    service_body: [
      {
        title: "A Book Publishing Company That Breaks the Mold",
        text: `Our creative team of ghostwriters transforms your idea into a stunning piece of art, giving new life to your story. We don’t just write books we craft legacies that inspire and endure. <em>“You bring the spark we’ll build the fire that lights up minds for generations.”</em>`,
        img: services_s10_1
      },
      {
        title: "Your Words, Our Craft",
        text: "At the heart of our ghostwriting service is a deep respect for your vision. Whether you have a few notes or a fully developed concept, our skilled ghostwriters work with you to shape your ideas into compelling stories, memoirs, or expert-driven nonfiction. We capture your voice, your tone, and your message—making sure your story sounds like “you”, only better.",
        img: services_s10_2
      },
      {

        title: "From Concept to Completion",
        text: "Our process is built for ease and excellence. We begin by listening to your goals and understanding your target audience. From there, we write, revise, and refine until your book is ready to be published with pride. With Western Book Publishing, you don’t just get a ghostwriter—you get a dedicated creative partner committed to turning your dream into a professionally crafted reality.",
        img: services_s10_3
      }
    ],
    sec2: {
      title: "Western Book Publishing The Top Book Ghostwriting Publishing Company You’ll Ever Need",
      text: "Be in the limelight with Western Book Publishing, where we make sure to transform your idea into an interesting book. It is not just a publishing service, but your passport to worldwide recognition, creative fulfilment, and a lifetime of achievement. Are you just getting started with on demand Amazon self publishing, investigating ebook publishing services, or wanting to go all the way and find book publication services? With us, you have come to the right place to make your publishing vision a published reality. With a decade of experience under our belt and the support of one of the top publishing houses, we are bound to get you on the path to literary success. It is your time to make a difference, to innovate, and to make your mark in the world. Join us and bring a creative revolution, and light your way to success."
    },
    wwd: [
      {
        title: "Personalized Story Development",
        text: "We help shape your raw ideas into a structured narrative that’s engaging, meaningful, and tailored to your voice and audience.",
        icon: icons_gw1
      },
      {
        title: "Professional Manuscript Writing",
        text: "Our experienced ghostwriters deliver original, high-quality content across genres—memoirs, novels, self-help, business books, and more.",
        icon: icons_gw2
      },
      {
        title: "Revisions and Refinement",
        text: "Collaborate with us through multiple revision rounds to perfect tone, flow, and clarity while staying true to your message.",
        icon: icons_gw3
      }
    ],
    faq: true
  },

  {
    title: "Amazon Publishing",
    link: "/amazon-publishing",
    hero: {
      title: "Get The Best Amazon Book Publishing With Western Book Publishing",
      text:
        "Have you been struggling to get reliable Amazon Book Publishing services? We make the art of Amazon self publishing easier at Western Book Publishing with independent authors who are ready to take their stories to the world. Are you releasing your debut novel, or is this your tenth guidebook? Our team assists you in publishing on Amazon with accuracy--all formatting and up-to-final upload. You do the writing, and we do the publishing, bringing your book into the world with all the finesse and intent.",
    },
    service_body: [
      {
        title: "Your Story Deserves a Global Stage — Let'S Get It Published With Professional Amazon Book Publishing",
        text: "Western Book Publishing assists you in publishing on Amazon with clear information and confidence. With our Amazon self publishing professionals, we will take you through the steps of self-publishing from manuscript to marketplace to help you polish, format, and get your book ready to launch through Amazon Book Publishing. Step by step, we do this grounded on simplicity and integrity, we translate your ideas into worldwide, shelf-ready success.",
        img: services_s1_1_1
      },
      {
        plan: true,
        title: "Standard Plan Services",
        points: [
          "Editing & Proofreading: Deep editing and detailed proofreading to make your manuscript clean, polished, and ready to be read.",
          "Cover Design: Tailor-made wrappers that will grab the hearts of your readers and establish a unique shelf appeal for your book.",
          "Formatting and Layout: Professional layout to reach the publishing requirements in both print and digital publications.",
          "Distribution: We place your book on leading online sites and shopping stores, so that it can be purchased or found in bookstores all over the globe."
        ]
      },
      {
        plan: true,
        title: "Extensive Plan Services",
        points: [
          "Manuscript Review: Critical proofreading and editing of your text to facilitate fluency, comprehensibility, and the effectiveness of your text. ",
          "Custom Cover Integration: Custom cover design that matches your creative vision and market expectations. ",
          "Global Layout and Typesetting: Accurate layouts and typesetting up to international publishing standards in both print and electronic format. ",
          "Finalization & Publishing: We do your finishing touches, delivering files that are ready to print, and sending them off into the vast world of: Amazon Book Publishing(Kindle, KDP Print, AU, UK, etc.). Big Box Stores: Barnes & Noble, Apple eBooks, Google Books, Walmart, Target, Chapters/ Indigo, Nook, BiblioU International Distributors: Booktopia, Bertrams, Blackwell, Aphrohead, Book Depository, Foyles, Fishpond, Waterstones, and many others."
        ]
      },
      {
        title: "Global Amazon Book Distribution – Just The Right Way",
        text: "Western Book Publishing helps you publish on Amazon and beyond with a focus on responsible, global distribution. From smart Amazon self-publishing strategies to optimized metadata and market targeting, we make sure your book travels far without compromising ethics or quality. No hype — just expert Amazon book publishing that delivers real visibility where it matters most.",
        img: services_s1_1_2
      }
    ],
    benefits: {
      title: "Why Authors Seems To Trust Our Amazon Book Publishing Services",
      text: [
        "Publishing on Amazon isn’t just about uploading a file—it’s about creating a book that readers trust, remember, and recommend. At Western Book Publishing, we turn your raw manuscript into a professionally published title that holds its own on Amazon’s global shelves.",
        "From the very first edit to the final click of \"Publish on Amazon,\" we handle every detail with care—formatting, cover design, keyword placement, metadata, and more. Whether you’re a first-timer exploring Amazon self-publishing or a seasoned author ready to scale, we equip you with the tools and strategies to thrive.",
        "We don’t sell dreams. We build them—page by page, platform by platform. Let’s make your book not just visible, but unforgettable."
      ]
    },
    sec2: {
      title: "Professional Amazon Publishing Services That Surely Wouldn’t Cost Your An Arm Or  A Leg",
      text: "Tired of overpriced publishing promises and complicated tech steps? Publishing on Amazon should be simple, professional, and easy on your wallet. At Western Book Publishing, we offer affordable Amazon publishing services designed for authors who want quality without overspending. From formatting and cover design to KDP setup and metadata optimization, we handle everything you need to get your book published and discovered by global readers. Our team ensures your book looks polished, meets all Amazon standards, and reflects the professionalism your work deserves, without the inflated cost."
    },
    wwd: [
      {
        title: "Book Illustration",
        text: "From children’s books to complex genres, our illustrators work closely with you to enhance your story’s visual appeal while keeping your creative direction front and center.",
        icon: icons_bpd1
      },
      {
        title: "Professional Book Publishing",
        text: "We support every step of the publishing process: manuscript prep, cover layout, file conversion, and platform upload instructions including support for KDP.",
        icon: icons_bpd2
      },
      {
        title: "Ethical Book Promotion",
        text: "Learn real, proven ways to promote your book. We help authors build platforms and connect with readers without false promises or guaranteed results.",
        icon: icons_bpd3
      }
    ],
    faq: true,
    qouestionare: [
      {
        title: "How does Amazon self-publishing with Western Book Publishing work?",
        ans: "We handle every step—from editing, formatting, and cover design to final upload on Amazon Kindle Direct Publishing (KDP). You send us your manuscript, and we guide you through the publishing journey until your book is live and ready for readers."
      },
      {
        title: "Do I retain full rights to my book?",
        ans: "Yes. 100%. You retain complete ownership and control of your book. We’re simply here to support your publishing journey, not take credit for your work."
      },
      {
        title: "How long does it take to publish on Amazon with your service?",
        ans: "Timelines vary by project, but most books are ready for publishing within 3 to 6 weeks, depending on the complexity of editing, formatting, and illustration (if needed). We’ll give you a clear timeline upfront."
      },
      {
        title: "Can you help me market my book after it's published?",
        ans: "Yes! We offer optional marketing add-ons, including Amazon keyword optimization, book launch strategies, and promotional campaigns to help increase visibility and sales."
      },
      {
        title: "What genres do you work with?",
        ans: "We work across all major genres—fiction, non-fiction, memoirs, business books, children's stories, and more. No matter your niche, we tailor the publishing process to fit your voice and audience."
      }
    ],
    servicesCard: servicesList.filter(({ id }) => [1, 2, 3, 6, 7, 9, 10].includes(id)),
  },

  {
    title: "Self Publishing",
    link: "/self-publishing",
    hero: {
      title: "Are You Ready To Self-Publish Your Book Western Book Publishing",
      text: "Western Book Publishing offers professional self-publishing services that transform dreamers into published authors; no gatekeepers, no red tape, no nonsense. Whether it is the image-acting professional formatting or an eye-catching cover, we take care of all the details to make your story sparkle. You remain in control, but we ease the process by assisting you with professional expertise. It is not only publishing but power at your pen.",
    },
    service_body: [
      {
        title: "WHAT OUR SELF-PUBLISHING SERVICES ENTAIL",
        text: "Western Book Publishing feels that all authors should have a place to be heard and self-publishing is the means to the spotlight. With our team of publishing professionals, you are also taken through each stage involved in publishing a book, including manuscript check, strategic marketing, and distribution all over the world. Are you publishing fiction, nonfiction, memoirs, poetry? We guarantee a professional polished, market-ready book.",
        img: services_s1_2_1
      },
      {
        plan: true,
        title: "Standard Plan Services",
        bold: "Perfect for first-time authors or those seeking a guided, budget-friendly self-publishing experience.",
        text: "Our Standard Plan Services provide all the essential tools you need to publish a high-quality book without compromising on professionalism. We’ve simplified the process to keep things clear, efficient, and effective.",
        heading: "What’s included:",
        points: [
          "Basic manuscript formatting for print and eBook",
          "Standard cover design (template-based, genre appropriate)",
          "ISBN assignment support",
          "eBook conversion (EPUB, MOBI, PDF)",
          "Distribution setup for Amazon Kindle and print-on-demand",
          "Author support via email",
          "Royalty and sales report guidance",
        ],
        conc: "Whether you’re publishing a passion project or testing the waters of the book world, our Standard Plan has you covered with the basics done right."
      },
      {
        plan: true,
        title: "Extensive Plan Services",
        bold: "Ideal for authors seeking a professional, market-ready book with full-service support and wider reach.",
        text: "Our Extensive Plan is designed for serious authors ready to make a splash in the publishing world. From editorial polish to global distribution and advanced marketing, this plan is your launchpad for long-term success.",
        heading: "What’s included:",
        points: [
          "In-depth manuscript evaluation",
          "Professional editing (line & copyediting)",
          "Custom cover design (bespoke, genre-targeted)",
          "Premium interior formatting for print and eBook",
          "ISBN & copyright registration assistance",
          "Multi-platform eBook conversion",
          "Global distribution (Amazon, Barnes & Noble, IngramSpark, Kobo, Apple Books)",
          "Author website (one-page design)",
          "Press release and launch strategy support",
          "Dedicated author success manager",
        ],
        conc: "With our Extensive Plan, your book won’t just be published it’ll be polished, positioned, and promoted with purpose."
      },
      {
        title: "Send Your Story Around the World   We’ll Handle the Passport",
        text: "At Western Book Publishing, we don’t just help you publish, we help you get discovered. Your book deserves more than a quiet corner of the internet. That’s why our expert distribution team plugs you into powerful, global networks where your story can thrive. We guide you through smart strategies, clever marketing moves, and platform know-how to connect you with readers who actually care. Whether it’s New York, Nairobi, or New Delhi your audience is out there, and we’ll make sure they find you. Let’s help you take your book from local secret to worldwide sensation.",
        img: services_s1_2_2
      }
    ],
    sec2: {
      title: "Self-Publishing Packages Designed for Authors Who Want Creative Freedom Without the Hassle",
      text: "Want full control of your publishing journey but not sure where to start? Self-publishing gives you complete ownership over your content, royalties, and direction, but it also comes with dozens of technical steps. That’s where Western Book Publishing steps in. We guide you through the entire process, from manuscript refinement, ISBN setup, and cover design to formatting, uploading, and book distribution. Our team gives you access to top-tier services without the gatekeeping of traditional publishers. Whether you need a publishing partner for one step or the entire process, you’re in control, and we’re here to support you."
    },
    benefits: {
      title: "All-n-One Amazon Self-Publishing Services On The Go",
      text: [
        "Dreaming of publishing on Amazon? We’ve helped thousands of authors do just that without the stress. At Western Book Publishing, our self-publishing experts handle everything from editing to cover design and global distribution.",
        "Whether you write romance, thrillers, or something totally original, we bring your story to life the right way. With us, you’re not just hitting “publish” you’re building a brand, reaching real readers, and turning your book into something unforgettable. Let’s make your publishing dream real and wildly successful."
      ]
    },
    wwd: [
      {
        title: "Book Illustration",
        text: "From children’s books to fiction and non-fiction, our illustrators deliver high-quality, custom artwork that complements your vision and genre.",
        icon: icons_bpd1
      },
      {
        title: "Book Publishing",
        text: "Access full publishing support including manuscript prep, formatting, cover design, and ISBN guidance — all in one place. We help you publish both print and eBook editions with clarity and control.",
        icon: icons_bpd2
      },
      {
        title: "Book Marketing",
        text: "Get marketing insights and support to increase your book’s reach. Learn how to connect with your target audience and build lasting visibility. Our team guides you through ethical, proven marketing methods for sustainable success.",
        icon: icons_bpd3
      }
    ],
    faq: true,
    servicesCard: servicesList.filter(({ id }) => [1, 2, 3, 6, 7, 9, 10].includes(id)),
  },

  {
    title: "Children's Book Publishing",
    link: "/childrens-book-publishing",
    hero: {
      title: "Bring Your Story to Life with Our Children's Book Publishing Services",
      text: `Writing a children's book is not merely writing a book; it is a way of inspiring, entertaining, and crafting the minds of the young children with magical stories and alluring images. Whether a nighttime children's story, a kind of adventurous trip, or an educational story, any children's book should have a chance to be in the spotlight. <br/> We would take care of making authors' visions come true in the form of beautifully published books that will appeal to the young readers at Western Book. Our team will help you to make the publishing process as effortless, imaginative, and joyful as possible, all the way, starting with the first word and ending with the final print.`,
    },
    service_body: [
      {
        title: "Why Choose Us for Your Children's Book Publishing?",
        text: [
          "Writing for children takes heart. Publishing for them takes expertise. That’s where we come in.",
          "Our team understands what makes a children’s book stand out: colorful, high-quality illustrations, age-appropriate storytelling, and a layout that’s fun and easy to follow. We provide professional children’s book services that bring all of this together under one roof. Here’s what sets our services apart:",
          `<b>Customized Publishing Plans:</b> Every story is different. Whether it's a picture book, early reader, or middle-grade chapter book, we tailor the publishing process to suit your story’s needs.`,
          `<b>Illustrations That Pop:</b> Our illustrators specialize in children’s artwork. From playful animals to magical worlds, we’ll match your manuscript with a style that brings it to life.`,
          `<b>Editing for Young Readers:</b> Our editors ensure your story is polished, age-appropriate, and aligned with reading level expectations.`,
          `<b>Print and Digital Formats:</b> Your book will be available in both paperback and eBook formats, making it easy for families and teachers to access.`,
          `<b>Support from Start to Finish:</b> We’re with you every step of the way from formatting and layout to distribution and marketing.`
        ],
        img: services_s1_3_1
      },
      {
        plan: true,
        title: "Standard Plan Services",
        points: [
          "Guidance and support to bring your children’s book to life",
          "Children’s book writers to help with plot, characters, and storyline",
          "Editing, proofreading, formatting, artwork, and design services",
          "Children’s book marketing and distribution services"
        ]
      },
      {
        plan: true,
        title: "Extensive Plan Services",
        points: [
          "Thorough review of the manuscript",
          "Designing/Integrating the book cover as per your preferences",
          "Final Layout, Formatting, and Typesetting (as per the international guidelines)",
          "Finalization of the publish-ready version of the book (Print & Digital)",
          "Publishing on Amazon, Kindle, Barnes & Noble, Google Books, Apple eBooks, Walmart.com, Target.com, Chapters/Indigo (Canada), NookBibliU.com, Amazon AU, Booktopia, Fishpond, The Nile, James Bennett, ALS, Peter Pal Adlibris, Agapea, Amazon.co.uk, Aphrohead, Bertrams, Blackwell, Book Depository Ltd, Books Express, Coutts Information, Services Ltd, Designarta Books, Eden Interactive Ltd, Foyles, Gardners, Mallory International, Paperback Shop Ltd, Superbookdeals, The Book Community Ltd, Waterstones."
        ]
      },
      {
        title: "Amazon Publishing Made Easy",
        text: [
          "Publishing your children’s book on Amazon doesn’t have to be complicated. Our Amazon publishing services take care of all the technical steps so you can focus on what matters in your story.",
          "We handle: Kindle Direct Publishing (KDP) setup, ISBN assignment and barcode integration, Metadata optimization for better discoverability, Uploading your files for both eBook and paperback, Price strategy and royalty guidance.",
          "With our help, your book will be available to millions of readers across the globe on the world’s largest book platform."
        ],
        expanded: true
      }
    ],
    sec2: {
      title: "Children’s Book Publishing with Custom Illustrations, Formatting, and Storytelling Support",
      text: "Do you have a heartwarming story for kids but feel lost on how to bring it to life? Children’s books require more than just great storytelling, they demand age-appropriate language, engaging visuals, and a layout that keeps young readers hooked. At Western Book Publishing, we specialize in turning simple manuscripts into professionally illustrated and published children’s books. Our services include custom artwork by experienced illustrators, vibrant cover designs, early-reader formatting, and publishing to platforms like Amazon, IngramSpark, and Barnes & Noble. We also offer narration for audiobooks and interactive digital editions. Whether you're targeting toddlers or tweens, we help you deliver a story that stands out in both classrooms and bookstores."
    },
    wwd: [
      {
        title: "Book Illustration",
        text: "Our skilled illustrators specialize in children’s books, creating artwork that brings your characters and scenes to life with color, detail, and age-appropriate style.",
        icon: icons_bpd1
      },
      {
        title: "Book Publishing",
        text: "From cover design and page formatting to ISBN guidance, we support you in preparing your book for both print and digital release. Your story, your way — professionally presented.",
        icon: icons_bpd2
      },
      {
        title: "Book Marketing",
        text: "Learn how to connect with your audience through ethical and effective promotional strategies. We help you understand how to build awareness and encourage book sales with clarity and confidence.",
        icon: icons_bpd3
      }
    ],
    faq: true,
    servicesCard: servicesList.filter(({ id }) => [1, 2, 3, 6, 7, 9, 10].includes(id)),
  },

  {
    title: "Barnes & Noble",
    link: "/barnes-and-noble",
    hero: {
      title: "Get Your Book on Barnes & Noble Shelves: The Right Way",
      text: `Wanting to see your book on shelves where actual readers will see it in Barnes & Noble? We make it a reality. <br/> At Western Book Publishing, we make it our business to see authors available on the best shelves in one of the most famous bookstores in the world. Whether it's online placement or in-store visibility, our team handles everything, from distribution setup to metadata optimization and professional presentation. We have assisted literally thousands of authors to this threshold. It might be your turn.`,
    },
    service_body: [
      {
        title: "Amazon Book Publishing Made Simple - We Help You Get Listed on Barnes & Noble with Ease",
        text: [
          "Western Book Publishing provides effective publishing strategies that will make your book accessible to thousands of actual readers. Under our Standard or Extensive Plan, we handle the heavy lifting work. Including the Lockup of distribution to your product being listed on the shelf.",
          "Get the exposure, credibility, and reach your book should enjoy, on a platform that millions trust."
        ],
        img: services_s1_4_1
      },
      {
        plan: true,
        title: "Standard Plan Services",
        bold: "Perfect for first-time authors or simple rollouts.",
        points: [
          "Professional manuscript review and line editing",
          "Visually striking book cover and interior layout",
          "Seamless distribution to the Barnes & Noble online store",
          "Your book, elevated with clean design and market-ready polish, built to attract readers from the first glance."
        ]
      },
      {
        plan: true,
        title: "Extensive Plan Services",
        bold: "Ideal for wide reach, cross-platform visibility, and international exposure.",
        points: [
          "In-depth manuscript analysis and refinement",
          "Custom-designed book cover tailored to your vision",
          "International-standard formatting and typesetting (print + digital)",
          "Full publishing and distribution on: Barnes & Noble, Amazon, Kindle, Google Books, Apple Books. Plus: Walmart, Target, Indigo (Canada), Booktopia, The Nile, Book Depository, and more",
          "One plan, endless shelf space we make your book globally accessible."
        ]
      },
      {
        title: "Credibility That Sets You Apart",
        text: "Getting published with Barnes & Noble isn’t just a milestone it’s a statement. It signals to readers, reviewers, and the industry that your book meets a gold standard.With Western Book Publishing guiding the way, your work gains the prestige of a trusted name, building your authority and increasing reader trust from day one.",
        img: services_s1_4_2
      },
    ],
    sec2: {
      title: "Barnes & Noble Publishing Services to Get Your Book into Prestigious Bookstore Channels",
      text: "Wondering how to see your book on Barnes & Noble’s shelves or online store? Barnes & Noble is one of the most trusted names in publishing, and your book deserves to be there. With Western Book Publishing, we make this possible by managing your publishing through B&N’s platforms, including Nook Press and IngramSpark. We ensure your manuscript is formatted correctly, your metadata aligns with bookstore algorithms, and your pricing strategy supports both visibility and profitability. Whether you're publishing print, eBook, or both, we ensure your title meets the quality and technical standards required by Barnes & Noble distribution."
    },
    benefits: {
      title: "Why Authors Choose Western for Barnes & Noble Publishing",
      text: [
        "Self-publishing with us means more than just distribution it means visibility, credibility, and reach. We position your book to shine online and catch the attention of eager readers.From eye- catching listings to market- savvy promotion, your story won’t just sit it’ll sell."
      ]
    },
    wwd: [
      {
        title: "Book Illustration",
        text: "We offer professional illustration services for all genres. From children’s books to graphic content, our illustrators bring your vision to life in a visually engaging way.",
        icon: icons_bpd1
      },
      {
        title: "Book Publishing",
        text: "Get complete publishing help — from layout and file prep to cover design and formatting for both print and digital books. We support you through every stage of the journey.",
        icon: icons_bpd2
      },
      {
        title: "Book Marketing",
        text: "Learn how to market your book effectively. We offer optional services and guidance to help you connect with your audience, share your message, and grow your readership.",
        icon: icons_bpd3
      }
    ],
    faq: true,
    servicesCard: servicesList.filter(({ id }) => [1, 2, 3, 6, 7, 9, 10].includes(id)),
  },

  {
    title: "Amazon Paid Ads",
    link: "/amazon-paid-ads",
    hero: {
      title: "Reach Your Target Audience, Increase Your Revenue!",
      text: "Get the best sales for your books on Amazon through expert paid ads management. Our team at Western Book Publishing is here to help in attaining the same through our Amazon Paid Ads Services. Our Amazon ads publisher experts will help you design and run ad campaigns to reach the targeted audience and make sales. Whether an audiobook, illustrated book, or any other type of book, we possess the knowledge and expertise to increase a book’s visibility and increase your revenue.",
    },
    service_body: [
      {
        title: "Turn Up the Volume on Your Story – Reach Millions of Audiobook Lovers!",
        text: "Are you an audiobook author looking to connect with a vast audience of eager listeners? Our Amazon Book Paid Ads service is your gateway to reaching millions of audiobook enthusiasts. We highlight what makes your story unique and bring it directly to the audience that’s ready to press play. Let us help boost your audiobook sales by attracting new fans through our customized advertising solutions.",
        img: services_s4_1
      },
      {
        plan: true,
        title: "Standard Plan Services",
        points: [
          "Targeted ad campaigns on Amazon to reach specific audiences interested in online marketing, social media, entrepreneurship, and self-development.",
          "Personalized ad campaign creation based on your book's unique selling points and target audience.",
          "Regular monitoring and optimization of ad campaigns to maximize results.",
          "Reporting and analysis to track the performance of your ads and make data-driven decisions."
        ]
      },
    ],
    sec2: {
      title: "Amazon Paid Ads Management That Converts Clicks into Sales Without Burning Your Budget",
      text: "Tried Amazon ads but didn’t see results, or don’t know where to begin? Running paid ads on Amazon can skyrocket your sales, but only with the right strategy. At Western Book Publishing, our ad specialists build, launch, and optimize your Amazon Sponsored Product and Sponsored Brand campaigns. We research profitable keywords, monitor real-time data, adjust bids, and deliver weekly performance reports so you know what’s working. Whether you're looking to drive more traffic or revive an underperforming title, we help you get the most value out of every advertising dollar."
    },
    benefits: {
      title: "Benefits of getting with Our Amazon Ads Services!",
      text: [
        "Ensure that your readers hit the mark and maximize sales by touting what each book in your series brings to the table. Let us raise a fuss about novels that have got readers ogling fantastic artworks and designs. Build a following of devoted fans and achieve more exposure through our Paid Ads Management Services. Get Started Now, and let the world see what you have written!",
        "Want to promote your online marketing book? Let us help you reach out to the readers most interested in learning more about marketing, growing their skills, and bettering their businesses. Our Amazon paid ads services zero in on audiences interested in online marketing, social media, entrepreneurship, and developing themselves to stay ahead of the competition. Run compelling ad campaigns that showcase your practical insights and actionable strategies in your book to drive targeted readership and take your sales to new heights. We, at Western Book Publishing, understand that every book is unique in its own way. That’s where Amazon Paid Ads Management comes in, giving special attention to your goals, target audience, and what makes your book truly special. We will work with you in person to create individually designed ad campaigns that best fit your objectives. This will allow your book to bring out the best from all probable directions. Let us see your marketing game grow, and reach your perfect readers together!"
      ]
    },
    wwd: [
      {
        title: "Audience Targeting",
        text: "We find the right readers based on genre, age group, and reader behavior.",
        icon: icons_apa1
      },
      {
        title: "Data-Driven Campaigns",
        text: "We track clicks and performance, so you only pay for what works.",
        icon: icons_apa2
      },
      {
        title: "Transparent Setup",
        text: "No fake promises. No misleading language. Just real strategies, clearly explained.",
        icon: icons_apa3
      }
    ]
  },

  {
    title: "Book SEO and SEM",
    link: "/book-seo-and-sem",
    hero: {
      title: "Boost Your Book’s Visibility with Western Book Publishing",
      text:
        "Our team of SEO and SEM professionals is here to help you achieve your goals for the campaigns. We are dedicated to providing you with continuous guidance and support, making sure that your campaigns work effectively towards bringing out the best results that one would want to attain. You can also seek our expertise to navigate the ever-changing search engine marketing landscape and stay ahead.",
    },
    service_body: [
      {
        title: "Be Seen or Stay Invisible",
        text: "SEO (Search Engine Optimization) and SEM (Search Engine Marketing) are two important strategies for improving the visibility and ranking of a website on search engine results pages. Here are some details about the services and plans offered under the heading “Book SEO and SEM.”",
        img: services_s4_2_1
      },
      {
        plan: true,
        title: "SEO Services",
        points: [
          "Keyword research and analysis: Identify the relevant keywords that your prospects are searching for.",
          "On-page optimization: Optimizing website content, meta tags, and images for search engines.",
          "Off-page optimization: Quality backlinks would be created from other quality websites to increase domain authority.",
          "Technical SEO: The website will be made technically sound and search engine crawler-friendly.",
          "Local SEO: It will optimize the website for local search results and Google My Business listings."
        ]
      },
      {
        plan: true,
        title: "SEM Services",
        points: [
          "PPC Advertising: Creation and management of AdWords campaigns for driving relevant traffic to the website.",
          "Display Advertising: Banner advertising on websites that are relevant to the target market for the brand.",
          "Remarketing: Users visiting the website earlier will be shown more personalized advertisements.",
          "Social Media Advertising: Running ads on Facebook, Instagram, and LinkedIn platforms to capture a wider audience.",
          "Conversion rate optimization: A process whereby a site's landing pages are improved for greater number of visitors to become paying customers."
        ]
      },
    ],
    sec2: {
      title: "Book SEO and SEM Optimization to Improve Ranking, Visibility, and Search Discoverability",
      text: "Is your book lost in the crowd of online listings and search engines? If your title isn’t ranking, it’s not selling. That’s why Western Book Publishing offers advanced SEO (Search Engine Optimization) and SEM (Search Engine Marketing) services tailored for authors. We optimize your book’s metadata, title, subtitle, keywords, categories, product description, and enhance your visibility on Amazon, Google, and niche book platforms. We also run targeted SEM campaigns using Google Ads and Amazon search ads to help your book appear where readers are searching. Our strategies are built for discoverability, relevance, and conversions."
    },
    benefits: {
      title: "Benefits of getting your online presence and reach new heights with our SEO and SEM services",
      text: [
        "By investing in these strategies, you can enhance your website’s visibility, attract more organic traffic, and ultimately boost your business growth. With our tailored plans and expert guidance, you can stay ahead of the competition and achieve your digital marketing goals.",
        "Our proficient team comes with a variety of plans that will maximize your website exposure and drive targeted traffic your way. Opt for our Basic SEO/SEM Package, which delivers the required keyword research and optimization. Step up to our Advanced Package for a more in-depth SEO audit and professional PPC campaign management. Looking for a customized solution? We will work out an individual plan for your aims with measurable returns. Don’t let this opportunity slip to increase your leads and sales—book your SEO and SEM service today!"
      ]
    },
    wwd: [
      {
        title: "Audience Targeting",
        text: "We find the right readers based on genre, age group, and reader behavior.",
        icon: icons_apa1
      },
      {
        title: "Data-Driven Campaigns",
        text: "We track clicks and performance, so you only pay for what works.",
        icon: icons_apa2
      },
      {
        title: "Transparent Setup",
        text: "No fake promises. No misleading language. Just real strategies, clearly explained.",
        icon: icons_apa3
      }
    ]
  },

  {
    title: "Digital Marketing",
    link: "/digital-marketing",
    hero: {
      title: "Grow Your Book's Reach with Western Book Publishing",
      text: "Bring your brand to the forefront of online presence through engagement with your target audience, outshining your competition with our comprehensive services in Digital Marketing. Our team of skilled experts dedicates itself to delivering exceptional results that drive quality leads to boost brand visibility and increase revenue growth. Having been rated as one of the best digital marketing agencies, we pride ourselves on providing strategic solutions that will propel your brand to success. Partner with us today to unlock the power of data-driven marketing with a measurable return.",
    },
    service_body: [
      {
        title: "Digital Marketing Services ",
        text: "Western Book Publishing gives you end-to-end digital marketing services customized to best suit your business requirements. Our experts will work with you to devise an individual plan to drive traffic, enhance conversions, and increase your online presence. You can trust us here at the Western Book Publishing, for we have performed earlier. Call today, and let’s discuss how we can take your business to the next level.",
        img: services_s4_3_1
      },
      {
        plan: true,
        title: "Standard Plan Services",
        points: [
          "Cost-effective digital marketing solutions",
          "Search engine optimization",
          "Tailor-made digital marketing strategies",
          "Dedicated teams working towards results",
          "Focus on ROI",
          "Help grow business and reach new customers"
        ]
      },
    ],
    sec2: {
      title: "Digital Marketing for Authors Looking to Build a Long-Term Brand and Reader Community",
      text: "Want to promote your book beyond Amazon and build a real audience? A published book is just the start, what you need is a personal brand that readers can follow and trust. At Western Book Publishing, our digital marketing team helps you do exactly that. We create and manage your online presence across Instagram, Facebook, YouTube, and more. From content calendars and email marketing to book trailers, blogs, and paid ads, we turn your book into a brand and your readers into a community. Our approach is hands-on, creative, and tailored to your niche."
    },
    benefits: {
      title: "Cost-Effective Digital Marketing Solutions",
      text: [
        "Our digital marketing agency is proud to offer cost-effective digital marketing solutions for small businesses of all dimensions. At our digital marketing and advertising agency, we have a long list of services that will help any business, whether at the starting gate or well-established, looking to better their game in digital marketing. By staying proactive and always one step ahead of the curve, embracing algorithm updates, we know exactly what users need and continue to deliver tangible results for our clients. We love guiding our clients through the shifting digital landscapes to hit their marketing goals.",
        "Are you ready to bring your small business to the next level? Partner with a digitally focused marketing company, ensuring many of our capabilities in search engine optimization and social media management drive your success. Tailor-made digital marketing strategies will enable us to design an action plan that answers all your business requirements. Our dedicated teams will work to ensure that your marketing functions with a view to results. With a focus on ROI, you can trust that your investment in digital marketing will pay off. Let your competition shine, but don’t give them the glory. Our digital marketing services can help you grow your business and reach new customers. Contact us today to find out more. Let’s make your business stand out in the digital world."
      ]
    },
    wwd: [
      {
        title: "Audience Targeting",
        text: "We find the right readers based on genre, age group, and reader behavior.",
        icon: icons_apa1
      },
      {
        title: "Data-Driven Campaigns",
        text: "We track clicks and performance, so you only pay for what works.",
        icon: icons_apa2
      },
      {
        title: "Transparent Setup",
        text: "No fake promises. No misleading language. Just real strategies, clearly explained.",
        icon: icons_apa3
      }
    ]
  }
];

/*
  Signs and their meanings for below const @terms
  -----------------------------------------------
   - [ '' ] ==> Bold text,
   - [ \n ] ==> Line Break,
   - [ `` ] ==> List Block,
   - [ | ]  ==> List Item,
   - [ {} ] ==> List Block in List Block,
   - [ \\ ] ==> List item in List item,
*/
export const terms = [
  {
    title: "Privacy policy",
    url: "/privacy-policy",
    description: "The privacy policy assists both you and us in keeping your information private. Our privacy policy will assist you in understanding the steps we take to protect your privacy both before and after the work process.",
    text: [
      {
        title: 'USER INFORMATION',
        details: "'For your identification and peaceful partnership, we may gather the following information.' \n ` Name, business name and job title. | Contact information, including phone numbers, email addresses or website.` \n 'We need your information to understand your needs better and offer you a better service, namely for the following reasons:' \n `The information may be used to enhance our goods and services. | We may also contact you to solicit feedback on our services based on the information you supply. | We can utilize the information to tailor the website to your preferences.`"
      },
      {
        title: "Security",
        detail: "We are dedicated to keeping your information safe. To prevent unauthorized access or disclosure, we have established appropriate physical, administrative systems and technological to protect and secure the information we collect online. \n `Clients' Information at Western Book Publishing is kept extremely secure during transmission by using the Secure Sockets Layer (SSL) Software, which encrypts the client's information. | Western Book Publishing adheres to widely established industry standards to safeguard the personal information submitted by the customer both during transmission and after received. However, because no Internet transmission or computer storage method is completely safe, we cannot guarantee its perfect security despite utilizing commercially reasonable efforts to protect your personal information.`"
      },
      {
        title: "3RD PARTY SHARING",
        detail: "`We do not disclose any personally identifiable information to other parties. | We do not provide or sell our client's personal information to third parties. | Western Book Publishing bills you for services using the services of credit card processing firms.These businesses never disclose, save, preserve, or use confidential information for any other reason.`",
      },
      {
        title: "COOKIES AND THEIR USE",
        detail: "`Cookies, alphanumeric identifiers, allow our systems to recognize our clients' browsers and save products in their Shopping Carts during visits. | The Help section of the toolbar on most browsers is useful for preventing the browser from accepting new cookies, disabling cookies, and notifying the user when a new cookie is received. |Clients usually do not prohibit cookies since they allow you to benefit from our site's key features fully. According to our findings, clients leave cookies to be accepted. | Western Book Publishing logs your IP address to diagnose server problems and administer our website.In addition, your IP address is used to collect broad demographic data regarding you, such as your location and Internet service provider. | Clients' aggregate information on how our visitors utilize the site may be obtained. This information might include specific visitor patterns on the site and search queries. There is no connection between IP address, log file data, and Personally Identifiable Information (PII). | Third parties can only obtain information about browser kinds, access times, URLs used to reach our site, and URLs visited by visitors on our site if combined.`",
      },
      {
        title: "Consumer Data Safety Measures",
        detail: "Your privacy is important to us. As a result, we do not disclose your name or contact information to any third party. Furthermore, we keep the information you supply secret. The information you enter is solely used to understand your needs better and tailor our services to meet them. We make every effort to adhere to PCI and consumer data protection regulations. \n Our organization does not permit its agents to get sensitive consumer information like credit card numbers.As a result, we strongly warn our clients not to discuss any personal or sensitive information with our workers.If you do so, you do it at your own risk, and our firm is not accountable for any abuse. \n Your requested work may be sent to one of our worldwide manufacturing or service facilities for excellent delivery.However, an NDA requires them to keep consumer information strictly secret.",
      },
      {
        title: "Pseudonym Policy",
        detail: "'We have a policy of employing aliases to ensure the following:' \n `We employ pseudonyms to eliminate unnecessary confusion and inconvenience for our clients when they are allocated a new account manager; it allows our customers to stay connected with a single point of contact while easily remembering their names. Moreover, as our staff comprises people from different regions and cultures, using pseudonyms helps us present a uniform culture of the organization.`",
      },
    ]
  },
  {
    title: "Terms & Conditions",
    url: "/terms-and-conditions",
    description: "These Terms and Conditions govern the use of <a class='link' href='https://westernbookpublishing.com'>www.westernbookpublishing.com</a> and the services provided by Western Book Publishing (“the Company,” “we,” “us,” or “our”). By using our website and services, you agree to these Terms in full. If you do not agree, you must not use our site or services.",
    text: [
      {
        title: 'Scope of Services',
        details: "Western Book Publishing provides a range of publishing-related services, including but not limited to: \n `'Book Publishing and Distribution' – Assistance with publishing your manuscript and making it available through multiple retail and distribution channels. | 'Amazon Publishing'– Publishing and optimization services tailored for Amazon’s platform. | 'Proofreading and Editing' – Grammar correction, sentence structure improvement, and content polishing for clarity and accuracy. | 'Book Promotions and Marketing' – Strategic marketing campaigns, promotional activities, and launch planning to increase book visibility. | 'Author Website'– Design and development of professional author websites to enhance branding and reader engagement. | 'Customized Illustrations'– Creation of original illustrations tailored to your book’s style and audience. | 'Book Cover Art'– Professional cover design for print and digital formats. | 'Audio Book Narration and Publishing'– Voice narration, production, and distribution of audiobooks. | 'Formatting and Layout'– Interior formatting and layout design for both print and eBook editions. | 'Ghost Writing' – Creation of original written works based on client-provided ideas, outlines, or concepts.` \n We reserve the right to: \n `Update or modify service offerings at any time without prior notice. | Deliver services according to the agreed project brief and contract.`"
      },
      {
        title: "Copyright and Author’s Responsibilities",
        detail: "The author retains full rights to their manuscript and is responsible for its originality and legality. By submitting content, the author: \n `Confirms that the manuscript is their original work. | Confirms that it does not infringe on any existing copyright, trademark, or intellectual property rights. | Confirms that all facts, claims, and statements in the manuscript are accurate to the best of their knowledge. | Is responsible for obtaining permissions for any third-party content (e.g., quotes, lyrics, images). | Confirms the manuscript does not contain unlawful, defamatory, obscene, or plagiarized material.` \n The Company reserves the right to: \n `Refuse, suspend, or terminate a project if the content violates the above conditions. | Withhold any refund for work already completed in such cases. | Hold the author liable for legal claims or damages resulting from their content.`"
      },
      {
        title: "Copyrights Policy (Company Use)",
        detail: "All content on this website, including text, images, and designs, is either: \n `Original content created by Western Book Publishing. | Licensed content with appropriate usage rights. | Public domain materials.` \n Clients acknowledge that: \n `No part of this website’s content may be reproduced, distributed, or transmitted without written permission. | Work produced for authors becomes their sole property upon full payment.`",
      },
      {
        title: "Payment Terms",
        detail: "`'Full Payment:' All services require 100% upfront payment unless otherwise agreed in writing. | 'Client Responsibility:' Clients are responsible for transaction fees and currency conversion charges. | 'Payment Plans:' Available at the Company’s discretion, with work commencing only after the agreed initial payment is received.`",
      },
      {
        title: "Cancellation and Refund Policy",
        detail: "Western Book Publishing values clarity and fairness in its cancellation and refund procedures. \n 'Order Cancellations:' \n `Orders may be cancelled for any reason within 'one hour' of placement, in which case a 'full refund' will be issued. | Once the one-hour period has passed, the order will be treated as final and cannot be cancelled.` \n 'Refund Requests:' \n`Clients who are not satisfied with their completed order may request a refund within '30 days' of delivery. | All approved refunds will be issued 'with a 50% early termination deduction' to account for work already completed and resources allocated. | To request a refund, clients must contact <[mailto:support@westernbookpublishing.com]support@westernbookpublishing.com>, providing their order number, a description of the concern, and any relevant supporting details. | Refunds will be processed back to the original payment method within '10–14 business days' after approval.` \n 'Chargebacks and Disputes:' \n `By engaging our services, you agree not to initiate a chargeback or payment dispute for completed work. | If a chargeback or dispute is filed, Western Book Publishing reserves the right to: {Apply an administrative fee to cover the costs of handling the dispute. \\ Pursue legal remedies to recover outstanding amounts and related expenses.} `",
      },
      {
        title: "Unlimited Revisions Policy",
        detail: "We offer unlimited revisions for all projects under the following conditions: \n `Revisions apply only to the original agreed scope of work. | Revisions do not include: {Adding new sections or topics not in the original brief. \\ Major changes in tone, style, or creative direction after approval. \\ Services not originally purchased.}`\n 'Revision Turnaround Times:' \n `Urgent orders (up to 24 hours): Delivered within 24 hours. | Orders 24–48 hours: Delivered within 48 hours. |Orders 48+ hours: Delivered within 72 hours.`",
      },
      {
        title: "Limitation of Liability",
        detail: "Western Book Publishing, its affiliates, and contractors shall not be liable for: \n `Loss of profits, sales, data, reputation, or business opportunities. | Delays caused by client actions or third-party service providers (e.g., Amazon, IngramSpark, Barnes & Noble). | Errors, omissions, or printing/distribution issues beyond our direct control.` \n 'Maximum Liability:' \n `Our total liability for any claim shall not exceed the total amount paid for the specific service in question.`",
      },
      {
        title: "Misrepresentation and Accuracy of Information",
        detail: "We commit to accurately describing our services and will not: \n `Imply partnerships or endorsements without written agreements. | Use third-party trademarks or logos in a misleading manner.` \n All service descriptions are for informational purposes only and do not guarantee specific results.",
      },
      {
        title: "Data Collection and Privacy",
        detail: "We may collect the following information when you use our website or contact us: \n `Name, email address, and phone number. | Project details voluntarily provided by you.` \n We guarantee: \n `Your data will not be sold, rented, or misused. | Information is used solely for communication, service delivery, and record-keeping. | For more details, see our Privacy Policy.`",
      },
      {
        title: "Dispute Resolution",
        detail: "`These Terms are governed by the laws of 'United States of America'. | Disputes will first be addressed through good faith negotiation. | If unresolved, disputes will be settled through binding arbitration in 'United States of America'. | The prevailing party may recover reasonable legal fees.`",
      },
      {
        title: "Editorial and Professional Standards",
        detail: "We commit to: \n `Professional communication and handling of all projects. | Clear, grammatically correct, and accurate content in all services and marketing materials. | Ensuring our website and advertising are directly relevant to the services offered.`",
      },
      {
        title: "Changes to Terms",
        detail: "`We may update these Terms and Conditions at any time without prior notice. | Continued use of our website after updates constitutes acceptance of the revised Terms.`",
      },
    ]
  }
];
