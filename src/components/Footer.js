import React from "react";

export function Footer() {
  return (
    <footer className="Github">
      <h3>
        Jude Ricketts on:
        <a
          href="https://github.com/LovesPictures"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          Github
        </a>
      </h3>
    </footer>
  );
}

// export default Footer;

/*
Reference: Get familiar with the basics of JSX
https://egghead.io/lessons/react-get-familiar-with-the-basics-of-jsx

NOTES: SEO 
"noopener noreferrer nofollow - are attribute values.

rel="noopener" you use on all links opening in new tabs using the target _blank. There are security implications if you don’t use the noopener value on your links opening in new tabs. A malicious attacker can use the window.opener object to change the content and location of the originating page.
rel="noreferrer" can serve a similar purpose as the noopener, especially in the older browsers. Hence, it makes sense to use them both. Additionally, noreferrer can affect your analytics and report traffic as direct instead of referral.
rel="nofollow" will inform search engines not to pass the link juice to the linked page, and it will not pass PageRank. You can consider it as a value which is used when you want to link to some another page but without “endorsing” it. It is the only rel value on this list with a tangible effect on SEO efforts.

https://pointjupiter.com/what-noopener-noreferrer-nofollow-explained/
*/
