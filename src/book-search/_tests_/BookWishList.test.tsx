import React from "react";
import { shallow } from "enzyme";
import BookWishlist from "../BookWishlist";

const books = {
  ptiYBAAAQBAJ: {
    kind: "books#volume",
    id: "ptiYBAAAQBAJ",
    etag: "bGK9LoHFKTs",
    selfLink: "https://www.googleapis.com/books/v1/volumes/ptiYBAAAQBAJ",
    volumeInfo: {
      title: "JavaScript & jQuery: The Missing Manual",
      authors: ["David Sawyer McFarland"],
      publisher: '"O\'Reilly Media, Inc."',
      publishedDate: "2014-09-18",
      description:
        "JavaScript lets you supercharge your HTML with animation, interactivity, and visual effects—but many web designers find the language hard to learn. This easy-to-read guide not only covers JavaScript basics, but also shows you how to save time and effort with the jQuery and jQuery UI libraries of prewritten JavaScript code. You’ll build web pages that feel and act like desktop programs—with little or no programming. The important stuff you need to know: Pull back the curtain on JavaScript. Learn how to build a basic program with this language. Get up to speed on jQuery. Quickly assemble JavaScript programs that work well on multiple web browsers. Transform your user interface. Learn jQuery UI, the JavaScript library for interface features like design themes and controls. Make your pages interactive. Create JavaScript events that react to visitor actions. Use animations and effects. Build drop-down navigation menus, pop-ups, automated slideshows, and more. Collect data with web forms. Create easy-to-use forms that ensure more accurate visitor responses. Practice with living examples. Get step-by-step tutorials for web projects you can build yourself.",
      industryIdentifiers: [
        {
          type: "ISBN_13",
          identifier: "9781491948613",
        },
        {
          type: "ISBN_10",
          identifier: "1491948612",
        },
      ],
      readingModes: {
        text: true,
        image: true,
      },
      pageCount: 686,
      printType: "BOOK",
      categories: ["Computers"],
      maturityRating: "NOT_MATURE",
      allowAnonLogging: true,
      contentVersion: "1.3.5.0.preview.3",
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        smallThumbnail:
          "http://books.google.com/books/content?id=ptiYBAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        thumbnail:
          "http://books.google.com/books/content?id=ptiYBAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      },
      language: "en",
      previewLink:
        "http://books.google.co.in/books?id=ptiYBAAAQBAJ&printsec=frontcover&dq=Javascript&hl=&cd=1&source=gbs_api",
      infoLink:
        "https://play.google.com/store/books/details?id=ptiYBAAAQBAJ&source=gbs_api",
      canonicalVolumeLink:
        "https://play.google.com/store/books/details?id=ptiYBAAAQBAJ",
    },
    saleInfo: {
      country: "IN",
      saleability: "FOR_SALE",
      isEbook: true,
      listPrice: {
        amount: 3174.2,
        currencyCode: "INR",
      },
      retailPrice: {
        amount: 3174.2,
        currencyCode: "INR",
      },
      buyLink:
        "https://play.google.com/store/books/details?id=ptiYBAAAQBAJ&rdid=book-ptiYBAAAQBAJ&rdot=1&source=gbs_api",
      offers: [
        {
          finskyOfferType: 1,
          listPrice: {
            amountInMicros: 3174200000,
            currencyCode: "INR",
          },
          retailPrice: {
            amountInMicros: 3174200000,
            currencyCode: "INR",
          },
        },
      ],
    },
    accessInfo: {
      country: "IN",
      viewability: "PARTIAL",
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: "ALLOWED",
      epub: {
        isAvailable: true,
      },
      pdf: {
        isAvailable: true,
      },
      webReaderLink:
        "http://play.google.com/books/reader?id=ptiYBAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
      accessViewStatus: "SAMPLE",
      quoteSharingAllowed: false,
    },
    searchInfo: {
      textSnippet:
        "JavaScript lets you supercharge your HTML with animation, interactivity, and visual effects—but many web designers find the language hard to learn.",
    },
  },
  p1v6DwAAQBAJ: {
    kind: "books#volume",
    id: "p1v6DwAAQBAJ",
    etag: "k+ckA2Lp0wE",
    selfLink: "https://www.googleapis.com/books/v1/volumes/p1v6DwAAQBAJ",
    volumeInfo: {
      title: "Eloquent JavaScript",
      subtitle: "A Modern Introduction to Programming",
      authors: ["Marijn Haverbeke"],
      publishedDate: "2018-11-15",
      description:
        "JavaScript lies at the heart of almost every modern web application, from social apps like Twitter to browser-based game frameworks like Phaser and Babylon. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications. This much anticipated and thoroughly revised third edition of Eloquent JavaScript dives deep into the JavaScript language to show you how to write beautiful, effective code.",
      industryIdentifiers: [
        {
          type: "ISBN_13",
          identifier: "9781593279509",
        },
        {
          type: "ISBN_10",
          identifier: "1593279507",
        },
      ],
      readingModes: {
        text: false,
        image: false,
      },
      pageCount: 472,
      printType: "BOOK",
      categories: ["Computers"],
      averageRating: 3.5,
      ratingsCount: 2,
      maturityRating: "NOT_MATURE",
      allowAnonLogging: false,
      contentVersion: "preview-1.0.0",
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        smallThumbnail:
          "http://books.google.com/books/content?id=p1v6DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        thumbnail:
          "http://books.google.com/books/content?id=p1v6DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      },
      language: "en",
      previewLink:
        "http://books.google.co.in/books?id=p1v6DwAAQBAJ&printsec=frontcover&dq=Javascript&hl=&cd=2&source=gbs_api",
      infoLink:
        "http://books.google.co.in/books?id=p1v6DwAAQBAJ&dq=Javascript&hl=&source=gbs_api",
      canonicalVolumeLink:
        "https://books.google.com/books/about/Eloquent_JavaScript.html?hl=&id=p1v6DwAAQBAJ",
    },
    saleInfo: {
      country: "IN",
      saleability: "NOT_FOR_SALE",
      isEbook: false,
    },
    accessInfo: {
      country: "IN",
      viewability: "PARTIAL",
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: "ALLOWED",
      epub: {
        isAvailable: false,
      },
      pdf: {
        isAvailable: false,
      },
      webReaderLink:
        "http://play.google.com/books/reader?id=p1v6DwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
      accessViewStatus: "SAMPLE",
      quoteSharingAllowed: false,
    },
    searchInfo: {
      textSnippet:
        "This much anticipated and thoroughly revised third edition of Eloquent JavaScript dives deep into the JavaScript language to show you how to write beautiful, effective code.",
    },
  },
};
describe("Detailed Table snapshot", () => {
  it('should render correctly in "debug" mode', () => {
    const props = {
      wishlist: books,
      deleteBook: jest.fn(),
    };
    const component: any = shallow(<BookWishlist {...props} />);
    expect(component).toMatchSnapshot();
    expect(component.find("[name='icon-delete']").getElements()).toHaveLength(
      2
    );
    component.find("[name='icon-delete']").getElements()[0].props.onClick();
    expect(props.deleteBook).toHaveBeenCalledTimes(1);

    // component.find("[data-id='handle-submit']").props().onClick();
    // expect(props.handleDialogSubmit).toHaveBeenCalledTimes(1);
  });
});
