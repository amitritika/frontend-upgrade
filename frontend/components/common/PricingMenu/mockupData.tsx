interface PricingOption {
    title: string;
    imageSrc: string;
    discount: number;
    price: number;
    features: string[];
    isAuth: boolean;
    purchaseLink: string;
    resumeBuilderLink: string;
    classSelected? : boolean;
  }
  
  export const mockPricingOptions: PricingOption[] = [
    {
      title: "Fresher",
      imageSrc: "https://images.unsplash.com/photo-1503676382389-4809596d5290?ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80",
      discount: 0,
      price: 250,
      features: [
        "1 Page Resume",
        "Unlimited Printing",
        "URL for Resume Sharing",
        "Basic Layout",
        "Layout Change Limited",
        "Ideal For Fresher with No Experience",
      ],
      isAuth: true,
      purchaseLink: "/user/payment/visualresume/fresher",
      resumeBuilderLink: "/visualresume/fresher",
    },
    {
      title: "Professional",
      imageSrc: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      discount: 10,
      price: 500,
      features: [
        "2 Pages Resume",
        "Unlimited Printing",
        "URL for Resume Sharing",
        "Professional Layout",
        "Layout Change Extensive",
        "Ideal For 0-4 Years experienced Professionals",
      ],
      isAuth: true,
      purchaseLink: "/user/payment/visualresume/pro",
      resumeBuilderLink: "/visualresume/pro",
      classSelected: true
    },
    {
      title: "Expert",
      imageSrc: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
      discount: 20,
      price: 1000,
      features: [
        "Unlimited Pages Resume",
        "Unlimited Printing",
        "URL for Resume Sharing",
        "Expert Layout",
        "Layout Change Extensive",
        "Ideal For 4+ Years experienced Professionals",
      ],
      isAuth: true,
      purchaseLink: "/user/payment/visualresume/expert",
      resumeBuilderLink: "/visualresume/expert",
    },
  ];
  