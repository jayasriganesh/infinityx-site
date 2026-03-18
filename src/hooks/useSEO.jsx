import { useEffect } from 'react';

export const useSEO = ({ title, description, keywords }) => {
  useEffect(() => {
    // 1. Update Title
    if (title) {
      document.title = title;
      // Also update OpenGraph title
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', title);
    }

    // 2. Update Description
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      } else {
        metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        metaDescription.content = description;
        document.head.appendChild(metaDescription);
      }

      // Also update OpenGraph description
      const ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) ogDescription.setAttribute('content', description);
    }

    // 3. Update Keywords (optional)
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      } else {
        metaKeywords = document.createElement('meta');
        metaKeywords.name = 'keywords';
        metaKeywords.content = keywords;
        document.head.appendChild(metaKeywords);
      }
    }
  }, [title, description, keywords]);
};
