import { books_hs1, books_hs2, books_hs3, books_r1, books_r2, books_r3, reviews_m1, reviews_m2, reviews_m3, reviews_m4, reviews_w1, reviews_w2, services_1, services_10, services_2, services_3, services_4, services_5, services_6, services_7, services_8, services_9 } from "@/public";
import { FaAlignLeft, FaBook, FaBookOpen, FaBullhorn, FaEdit, FaGlobe, FaImage, FaMicrophone, FaPalette, FaPen } from "react-icons/fa";
import { IoCallOutline, IoLocationOutline, IoMailOutline } from "react-icons/io5";


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
    link: "/about-us",
  },
];

export const roundSlider = [
  "/images/books/1_4.avif",
  "/images/books/2_4.avif",
  "/images/books/3_4.avif",
  "/images/books/4_4.avif",
  "/images/books/5_4.avif",
  "/images/books/6_4.avif",
];

export const homeSec3 = [
  {
    title: "Ghost Writing Services for Biography",
    text: "Capture someone’s real-life journey with dignity, accuracy, and storytelling finesse. Our biography ghost writing service transforms timelines and milestones into a legacy worth reading.",
    url: "/ghostwriting/biography",
    img: books_hs1,
  },
  {
    title: "Ghost Writing Services for Autobiography",
    text: "Your story, told your way. Ink Nest Publishing helps you narrate your life’s experiences with emotional depth and personal voice. We guide you through the process with compassion and clarity.",
    url: "/ghostwriting/autobiography",
    img: books_hs2,
  },
  {
    title: "Ghost Writing Services for Memoir",
    text: "Our memoir ghost writing services focus on reflection and meaning. Perfect for those seeking to share personal challenges, life lessons, or defining moments with vulnerability and purpose.",
    url: "/ghostwriting/memoir",
    img: books_hs3,
  },
  {
    title: "Ghost Writing Services for Fiction",
    text: "Let imagination take the lead. From plot arcs to character dialogue, our fiction ghost writers help craft novels that engage and entertain, while staying true to your original concept.",
    url: "/ghostwriting/fiction",
    img: books_r1,
  },
  {
    title: "Ghost Writing Services for Business Books",
    text: "Position yourself as a thought leader. Whether you’re a startup founder or an industry expert, our business book ghost writing service helps you share strategies, systems, and insights professionally.",
    url: "/ghostwriting/informative",
    img: books_r2,
  },
  {
    title: "Ghost Writing Services for Self-Help & Personal Growth",
    text: "Inspire transformation. Our self-help ghost writers assist in framing your expertise and motivation in a way that empowers readers. Together, we’ll turn guidance into growth.",
    url: "/ghostwriting/non-fiction",
    img: books_r3,
  },
];

export const servicesList = [
  {
    id: 1,
    title: "Book Publishing and Distribution",
    link: "/book-publishing",
    img: services_1,
    icon: FaBook,
    text:
      "Launch globally with confidence. We handle everything from print to digital distribution, ensuring your book reaches readers everywhere."
  },
  {
    id: 2,
    title: "E-Book Publishing",
    link: "/ebook-publishing",
    img: services_2,
    icon: FaBookOpen,
    text:
      "Publish your eBook seamlessly across all major platforms with our expert formatting, design, and marketing support."
  },
  {
    id: 3,
    title: "Proofreading and Editing",
    link: "/proofreading-and-editing",
    img: services_3,
    icon: FaEdit,
    text:
      "Our professional editors refine your words to perfection, delivering clarity, polish, and impact on every page."
  },
  {
    id: 4,
    title: "Book Promotions and Marketing",
    link: "/book-marketing-services",
    img: services_4,
    icon: FaBullhorn,
    text:
      "We create tailored marketing strategies that boost visibility, attract readers, and increase book sales."
  },
  {
    id: 5,
    title: "Author Website",
    link: "/author-website",
    img: services_5,
    icon: FaGlobe,
    text:
      "Showcase your author brand with a beautifully designed website that connects you with your audience."
  },
  // {
  //   id: 6,
  //   title: "Customized Illustrations",
  //   link: "/customized-illustrations",
  //   img: services_6,
  //   icon: FaPalette,
  //   text:
  //     "Bring your imagination to life with bespoke illustrations that match your story’s tone and style."
  // },
  {
    id: 7,
    title: "Book Cover Art",
    link: "/book-cover-art",
    img: services_7,
    icon: FaImage,
    text:
      "Make a memorable first impression with eye-catching, professionally designed covers."
  },
  {
    id: 8,
    title: "Audio Book Narration and Publishing",
    link: "/audio-book-services",
    img: services_8,
    icon: FaMicrophone,
    text:
      "Give your story a voice. We produce and publish high-quality audiobooks for a wider audience."
  },
  {
    id: 9,
    title: "formatting and Layout",
    link: "/formatting-and-layout",
    img: services_9,
    icon: FaAlignLeft,
    text:
      "From layout to typography, we create clean, professional designs that elevate your book’s presentation."
  },
  {
    id: 10,
    title: "Ghost Writing",
    link: "/ghost-writing",
    img: services_10,
    icon: FaPen,
    text:
      "No time to write? Our expert ghostwriters craft compelling books in your voice ready for publication and success."
  }
];

export const testimonials = [
  {
    name: "Nini Karlina",
    role: "Author of Ignite Your Motivation in 7 Days",
    avatar: reviews_w1,
    comment:
      "As a first-time author, I was overwhelmed by the process of turning my ideas into a published book—but Open Page Publishing simplified everything. Their team helped me organize my content, format the manuscript for Kindle, and even provided feedback to make the structure more impactful. Thanks to their support, my book looks polished, reads smoothly, and is now live on Amazon. I’m incredibly grateful for their professionalism and would absolutely work with them again.",
  },
  {
    name: "Larry J. Kachik",
    role: "M.D. – Author of Dying Was Easy (Zachary Zander Series)",
    avatar: reviews_m1,
    comment:
      "Working with Open Page Publishing, and especially my project manager Casper William, was one of the best decisions I made for my book. Casper understood the tone and complexity of my medical thriller and made sure every detail—from manuscript formatting to cover design—reflected the intensity and professionalism I envisioned. The entire team was responsive, reliable, and genuinely cared about getting it right. I’m proud of what we created together, and I look forward to continuing the series with them.",
  },
  {
    name: "Nate Stack",
    role: "Author of Voodoo War",
    avatar: reviews_w2,
    comment:
      "From the first call to the final upload, Open Page Publishing delivered exactly what they promised. Chris Parker, my front-line manager, ensured the onboarding was smooth, clearly explained the independent publishing process, and helped me retain full rights and royalties to my work. He walked me through every step, making sure I understood the options and had full control. The back-end team was equally sharp—fast, responsive, and skilled. I couldn’t have asked for a better crew to bring Voodoo War to life.",
  },
  {
    name: "Daniel DellaVecchia",
    role: "Author of The Adventures of the Doppelganger Kids",
    avatar: reviews_m2,
    comment:
      "Creating a meaningful children’s book with both heart and message required more than just words—it needed the right visuals too. Frank Mile from Open Page Publishing was instrumental in guiding my illustrator through every requirement, helping us align on style, emotion, and message. He really understood my vision and worked closely with us to bring it to life. Thanks to Frank and the team, The Adventures of the Doppelganger Kids came out exactly how I imagined—vibrant, thoughtful, and impactful.",
  },
  {
    name: "Duo Farsi Kids Books",
    role: "Author of Koja Hasti – Where Are You?",
    avatar: reviews_m3,
    comment:
      "Bringing a bilingual Persian-English children’s book to life was a challenge we didn’t want to trust just anyone with—but Open Page Publishing exceeded expectations in every way. Their team handled the complexities of Persian script, phonetics, and layout with care and precision. From typesetting to page design to adding audio resources, they helped us create a vibrant, accessible, and educational experience for young readers. Thanks to their multilingual publishing capabilities, Koja Hasti – Where Are You? is now reaching families across the world in multiple languages.",
  },
  {
    name: "Niels Larsson",
    role: "Author of The Shield Wall: Book One of The Saga of Yggdrasil",

    avatar: reviews_m4,
    comment:
      "Writing an epic like The Shield Wall—with its mix of Norse mythology, science fiction, and layered world-building—was one thing. Turning it into a clean, immersive Kindle edition was another challenge entirely. Open Page Publishing handled the formatting, structure, and pacing with complete professionalism. They respected the complexity of my vision and ensured everything—from chapter breaks to psychic warfare terminology—was perfectly aligned. Their insight made my debut not only readable, but truly impactful. I trusted them with my saga, and they delivered.",
  },
];

export const faqs = [
  {
    title: "Can I publish my book even if it's my first time?",
    ans: "Absolutely! We specialize in helping first-time authors navigate every step — from editing to publishing."
  },
  {
    title: "Which platforms will my book be available on?",
    ans: "We publish on Amazon, Barnes & Noble, Audible, and other global platforms for maximum reach."
  },
  {
    title: "Do I retain the rights to my book?",
    ans: "Yes. You maintain 100% ownership of your work. We're simply your professional publishing partner."
  },
  {
    title: "How long does the publishing process take?",
    ans: "Depending on your package and manuscript readiness, the process typically takes 4–8 weeks."
  },
  {
    title: "Do you offer marketing support?",
    ans: "Yes! We provide optional book marketing and promotional services to help you reach more readers."
  },
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
        detail: "We are dedicated to keeping your information safe. To prevent unauthorized access or disclosure, we have established appropriate physical, administrative systems and technological to protect and secure the information we collect online. \n `Clients' Information at Open Page Publishing is kept extremely secure during transmission by using the Secure Sockets Layer (SSL) Software, which encrypts the client's information. | Open Page Publishing adheres to widely established industry standards to safeguard the personal information submitted by the customer both during transmission and after received. However, because no Internet transmission or computer storage method is completely safe, we cannot guarantee its perfect security despite utilizing commercially reasonable efforts to protect your personal information.`"
      },
      {
        title: "3RD PARTY SHARING",
        detail: "`We do not disclose any personally identifiable information to other parties. | We do not provide or sell our client's personal information to third parties. | Open Page Publishing bills you for services using the services of credit card processing firms.These businesses never disclose, save, preserve, or use confidential information for any other reason.`",
      },
      {
        title: "COOKIES AND THEIR USE",
        detail: "`Cookies, alphanumeric identifiers, allow our systems to recognize our clients' browsers and save products in their Shopping Carts during visits. | The Help section of the toolbar on most browsers is useful for preventing the browser from accepting new cookies, disabling cookies, and notifying the user when a new cookie is received. |Clients usually do not prohibit cookies since they allow you to benefit from our site's key features fully. According to our findings, clients leave cookies to be accepted. | Open Page Publishing logs your IP address to diagnose server problems and administer our website.In addition, your IP address is used to collect broad demographic data regarding you, such as your location and Internet service provider. | Clients' aggregate information on how our visitors utilize the site may be obtained. This information might include specific visitor patterns on the site and search queries. There is no connection between IP address, log file data, and Personally Identifiable Information (PII). | Third parties can only obtain information about browser kinds, access times, URLs used to reach our site, and URLs visited by visitors on our site if combined.`",
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
    description: "These Terms and Conditions govern the use of <a class='link' href='https://openpagepublishing.com'>www.openpagepublishing.com</a> and the services provided by Open Page Publishing (“the Company,” “we,” “us,” or “our”). By using our website and services, you agree to these Terms in full. If you do not agree, you must not use our site or services.",
    text: [
      {
        title: 'Scope of Services',
        details: "Open Page Publishing provides a range of publishing-related services, including but not limited to: \n `'Book Publishing and Distribution' – Assistance with publishing your manuscript and making it available through multiple retail and distribution channels. | 'Amazon Publishing'– Publishing and optimization services tailored for Amazon’s platform. | 'Proofreading and Editing' – Grammar correction, sentence structure improvement, and content polishing for clarity and accuracy. | 'Book Promotions and Marketing' – Strategic marketing campaigns, promotional activities, and launch planning to increase book visibility. | 'Author Website'– Design and development of professional author websites to enhance branding and reader engagement. | 'Customized Illustrations'– Creation of original illustrations tailored to your book’s style and audience. | 'Book Cover Art'– Professional cover design for print and digital formats. | 'Audio Book Narration and Publishing'– Voice narration, production, and distribution of audiobooks. | 'Formatting and Layout'– Interior formatting and layout design for both print and eBook editions. | 'Ghost Writing' – Creation of original written works based on client-provided ideas, outlines, or concepts.` \n We reserve the right to: \n `Update or modify service offerings at any time without prior notice. | Deliver services according to the agreed project brief and contract.`"
      },
      {
        title: "Copyright and Author’s Responsibilities",
        detail: "The author retains full rights to their manuscript and is responsible for its originality and legality. By submitting content, the author: \n `Confirms that the manuscript is their original work. | Confirms that it does not infringe on any existing copyright, trademark, or intellectual property rights. | Confirms that all facts, claims, and statements in the manuscript are accurate to the best of their knowledge. | Is responsible for obtaining permissions for any third-party content (e.g., quotes, lyrics, images). | Confirms the manuscript does not contain unlawful, defamatory, obscene, or plagiarized material.` \n The Company reserves the right to: \n `Refuse, suspend, or terminate a project if the content violates the above conditions. | Withhold any refund for work already completed in such cases. | Hold the author liable for legal claims or damages resulting from their content.`"
      },
      {
        title: "Copyrights Policy (Company Use)",
        detail: "All content on this website, including text, images, and designs, is either: \n `Original content created by Open Page Publishing. | Licensed content with appropriate usage rights. | Public domain materials.` \n Clients acknowledge that: \n `No part of this website’s content may be reproduced, distributed, or transmitted without written permission. | Work produced for authors becomes their sole property upon full payment.`",
      },
      {
        title: "Payment Terms",
        detail: "`'Full Payment:' All services require 100% upfront payment unless otherwise agreed in writing. | 'Client Responsibility:' Clients are responsible for transaction fees and currency conversion charges. | 'Payment Plans:' Available at the Company’s discretion, with work commencing only after the agreed initial payment is received.`",
      },
      {
        title: "Cancellation and Refund Policy",
        detail: "Open Page Publishing values clarity and fairness in its cancellation and refund procedures. \n 'Order Cancellations:' \n `Orders may be cancelled for any reason within 'one hour' of placement, in which case a 'full refund' will be issued. | Once the one-hour period has passed, the order will be treated as final and cannot be cancelled.` \n 'Refund Requests:' \n`Clients who are not satisfied with their completed order may request a refund within '30 days' of delivery. | All approved refunds will be issued 'with a 50% early termination deduction' to account for work already completed and resources allocated. | To request a refund, clients must contact <[mailto:support@openpagepublishing.com]support@openpagepublishing.com>, providing their order number, a description of the concern, and any relevant supporting details. | Refunds will be processed back to the original payment method within '10–14 business days' after approval.` \n 'Chargebacks and Disputes:' \n `By engaging our services, you agree not to initiate a chargeback or payment dispute for completed work. | If a chargeback or dispute is filed, Open Page Publishing reserves the right to: {Apply an administrative fee to cover the costs of handling the dispute. \\ Pursue legal remedies to recover outstanding amounts and related expenses.} `",
      },
      {
        title: "Unlimited Revisions Policy",
        detail: "We offer unlimited revisions for all projects under the following conditions: \n `Revisions apply only to the original agreed scope of work. | Revisions do not include: {Adding new sections or topics not in the original brief. \\ Major changes in tone, style, or creative direction after approval. \\ Services not originally purchased.}`\n 'Revision Turnaround Times:' \n `Urgent orders (up to 24 hours): Delivered within 24 hours. | Orders 24–48 hours: Delivered within 48 hours. |Orders 48+ hours: Delivered within 72 hours.`",
      },
      {
        title: "Limitation of Liability",
        detail: "Open Page Publishing, its affiliates, and contractors shall not be liable for: \n `Loss of profits, sales, data, reputation, or business opportunities. | Delays caused by client actions or third-party service providers (e.g., Amazon, IngramSpark, Barnes & Noble). | Errors, omissions, or printing/distribution issues beyond our direct control.` \n 'Maximum Liability:' \n `Our total liability for any claim shall not exceed the total amount paid for the specific service in question.`",
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
