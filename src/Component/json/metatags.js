export default {
    "home" : () => {
        document.title = "Dev Equip";
        const importantTags = {
            "title" : "Dev Equip",
            "description" : "Empowering you to become a professional developer, Dev Equip provides resources, tools, and a supportive community to help you excel in your projects and growth.",
            "url": "https://www.devequip.com"
        }


        const metaTags = [
          { itemprop: "name", content: importantTags.title },
          { itemprop: "description", content: importantTags.description },
          { itemprop: "image", content: "https://www.devequip.com/logo.png" },
          
          { name: "description", content: importantTags.description },
          { name: "author", content: "Dev Equip" },
          { name: "keywords", content: "dev, devs, developers, equip, equipment, roblox, unity, games, game, administrator, development, marketplace, store" },
          { name: "theme-color", content: "#000000" },
          
          { property: "og:site_name", content: "Dev Equip" },
          { property: "og:title", content: importantTags.title },
          { property: "og:description", content: importantTags.description },
          { property: "og:image", content: "https://www.devequip.com/logo.png" },
          { property: "og:image:width", content: "465" },
          { property: "og:image:height", content: "465" },
          { property: "og:url", content: importantTags.url },
          
          { name: "twitter:card", content: "summary" },
          { name: "twitter:title", content: importantTags.title },
          { name: "twitter:description", content: importantTags.description },
          { name: "twitter:image", content: "https://www.devequip.com/logo.png" },
          
          { name: "copyright", content: "Dev Equip" },
          { name: "distribution", content: "global" }
        ];
      
        metaTags.forEach(tag => {
          let metaElement = document.querySelector(`meta[${Object.keys(tag)[0]}='${tag[Object.keys(tag)[0]]}']`);
          if (!metaElement) {
            metaElement = document.createElement('meta');
            metaElement.setAttribute(Object.keys(tag)[0], tag[Object.keys(tag)[0]]);
            document.head.appendChild(metaElement);
          }
          metaElement.setAttribute('content', tag.content);
        });
    },

    "about" : () => {
        document.title = "About — Dev Equip";
        const importantTags = {
            "title" : "About",
            "description" : "Learn more about Dev Equip's story, core values, and their achievements over the years.",
            "url": "https://www.devequip.com/about"
        }


        const metaTags = [
          { itemprop: "name", content: importantTags.title },
          { itemprop: "description", content: importantTags.description },
          { itemprop: "image", content: "https://www.devequip.com/logo.png" },
          
          { name: "description", content: importantTags.description },
          { name: "author", content: "Dev Equip" },
          { name: "keywords", content: "dev, devs, developers, equip, equipment, roblox, unity, games, game, administrator, development, marketplace, store" },
          { name: "theme-color", content: "#000000" },
          
          { property: "og:site_name", content: "Dev Equip" },
          { property: "og:title", content: importantTags.title },
          { property: "og:description", content: importantTags.description },
          { property: "og:image", content: "https://www.devequip.com/logo.png" },
          { property: "og:image:width", content: "465" },
          { property: "og:image:height", content: "465" },
          { property: "og:url", content: importantTags.url },
          
          { name: "twitter:card", content: "summary" },
          { name: "twitter:title", content: importantTags.title },
          { name: "twitter:description", content: importantTags.description },
          { name: "twitter:image", content: "https://www.devequip.com/logo.png" },
          
          { name: "copyright", content: "Dev Equip" },
          { name: "distribution", content: "global" }
        ];
      
        metaTags.forEach(tag => {
          let metaElement = document.querySelector(`meta[${Object.keys(tag)[0]}='${tag[Object.keys(tag)[0]]}']`);
          if (!metaElement) {
            metaElement = document.createElement('meta');
            metaElement.setAttribute(Object.keys(tag)[0], tag[Object.keys(tag)[0]]);
            document.head.appendChild(metaElement);
          }
          metaElement.setAttribute('content', tag.content);
        });
    },

    "marketplace" : () => {
        document.title = "Marketplace — Dev Equip";
        const importantTags = {
            "title" : "Marketplace",
            "description" : "Browse through our marketplace for products and tools to assist you in creating amazing games.",
            "url": "https://www.devequip.com/marketplace"
        }


        const metaTags = [
          { itemprop: "name", content: importantTags.title },
          { itemprop: "description", content: importantTags.description },
          { itemprop: "image", content: "https://www.devequip.com/logo.png" },
          
          { name: "description", content: importantTags.description },
          { name: "author", content: "Dev Equip" },
          { name: "keywords", content: "dev, devs, developers, equip, equipment, roblox, unity, games, game, administrator, development, marketplace, store" },
          { name: "theme-color", content: "#000000" },
          
          { property: "og:site_name", content: "Dev Equip" },
          { property: "og:title", content: importantTags.title },
          { property: "og:description", content: importantTags.description },
          { property: "og:image", content: "https://www.devequip.com/logo.png" },
          { property: "og:image:width", content: "465" },
          { property: "og:image:height", content: "465" },
          { property: "og:url", content: importantTags.url },
          
          { name: "twitter:card", content: "summary" },
          { name: "twitter:title", content: importantTags.title },
          { name: "twitter:description", content: importantTags.description },
          { name: "twitter:image", content: "https://www.devequip.com/logo.png" },
          
          { name: "copyright", content: "Dev Equip" },
          { name: "distribution", content: "global" }
        ];
      
        metaTags.forEach(tag => {
          let metaElement = document.querySelector(`meta[${Object.keys(tag)[0]}='${tag[Object.keys(tag)[0]]}']`);
          if (!metaElement) {
            metaElement = document.createElement('meta');
            metaElement.setAttribute(Object.keys(tag)[0], tag[Object.keys(tag)[0]]);
            document.head.appendChild(metaElement);
          }
          metaElement.setAttribute('content', tag.content);
        });
    },

    "product" : (jsonContent) => {
        document.title = `${jsonContent.name} — Dev Equip`;
        const importantTags = {
            "title" : jsonContent.name,
            "description" : jsonContent.description,
            "url": `https://www.devequip.com${jsonContent.redirect}`
        }


        const metaTags = [
          { itemprop: "name", content: importantTags.title },
          { itemprop: "description", content: importantTags.description },
          { itemprop: "image", content: "https://www.devequip.com/logo.png" },
          
          { name: "description", content: importantTags.description },
          { name: "author", content: "Dev Equip" },
          { name: "keywords", content: "dev, devs, developers, equip, equipment, roblox, unity, games, game, administrator, development, marketplace, store" },
          { name: "theme-color", content: "#000000" },
          
          { property: "og:site_name", content: "Dev Equip" },
          { property: "og:title", content: importantTags.title },
          { property: "og:description", content: importantTags.description },
          { property: "og:image", content: `https://www.devequip.com/${jsonContent.thumbnails[0]}` },
          { property: "og:url", content: importantTags.url },
          
          { name: "twitter:card", content: "summary_large_image" },
          { name: "twitter:title", content: importantTags.title },
          { name: "twitter:description", content: importantTags.description },
          { name: "twitter:image", content: `https://www.devequip.com/${jsonContent.thumbnails[0]}` },
          
          { name: "copyright", content: "Dev Equip" },
          { name: "distribution", content: "global" }
        ];
      
        metaTags.forEach(tag => {
          let metaElement = document.querySelector(`meta[${Object.keys(tag)[0]}='${tag[Object.keys(tag)[0]]}']`);
          if (!metaElement) {
            metaElement = document.createElement('meta');
            metaElement.setAttribute(Object.keys(tag)[0], tag[Object.keys(tag)[0]]);
            document.head.appendChild(metaElement);
          }
          metaElement.setAttribute('content', tag.content);
        });
    },

    "blog" : () => {
        document.title = "Blog — Dev Equip";
        const importantTags = {
            "title" : "Blog",
            "description" : "Read about Dev Equip's latest updates, in-depth tutorials, insightful articles, and exclusive behind-the-scenes looks of our projects.",
            "url": "https://www.devequip.com/blog"
        }


        const metaTags = [
          { itemprop: "name", content: importantTags.title },
          { itemprop: "description", content: importantTags.description },
          { itemprop: "image", content: "https://www.devequip.com/logo.png" },
          
          { name: "description", content: importantTags.description },
          { name: "author", content: "Dev Equip" },
          { name: "keywords", content: "dev, devs, developers, equip, equipment, roblox, unity, games, game, administrator, development, marketplace, store" },
          { name: "theme-color", content: "#000000" },
          
          { property: "og:site_name", content: "Dev Equip" },
          { property: "og:title", content: importantTags.title },
          { property: "og:description", content: importantTags.description },
          { property: "og:image", content: "https://www.devequip.com/logo.png" },
          { property: "og:image:width", content: "465" },
          { property: "og:image:height", content: "465" },
          { property: "og:url", content: importantTags.url },
          
          { name: "twitter:card", content: "summary" },
          { name: "twitter:title", content: importantTags.title },
          { name: "twitter:description", content: importantTags.description },
          { name: "twitter:image", content: "https://www.devequip.com/logo.png" },
          
          { name: "copyright", content: "Dev Equip" },
          { name: "distribution", content: "global" }
        ];
      
        metaTags.forEach(tag => {
          let metaElement = document.querySelector(`meta[${Object.keys(tag)[0]}='${tag[Object.keys(tag)[0]]}']`);
          if (!metaElement) {
            metaElement = document.createElement('meta');
            metaElement.setAttribute(Object.keys(tag)[0], tag[Object.keys(tag)[0]]);
            document.head.appendChild(metaElement);
          }
          metaElement.setAttribute('content', tag.content);
        });
    },

    "post" : (jsonContent, postId) => {
        document.title = `${jsonContent.name} — Dev Equip`;
        const importantTags = {
            "title" : jsonContent.title,
            "description" : jsonContent.description,
            "url": `https://www.devequip.com/newsroom/${postId}`
        }


        const metaTags = [
          { itemprop: "name", content: importantTags.title },
          { itemprop: "description", content: importantTags.description },
          { itemprop: "image", content: "https://www.devequip.com/logo.png" },
          
          { name: "description", content: importantTags.description },
          { name: "author", content: "Dev Equip" },
          { name: "keywords", content: "dev, devs, developers, equip, equipment, roblox, unity, games, game, administrator, development, marketplace, store" },
          { name: "theme-color", content: "#000000" },
          
          { property: "og:site_name", content: "Dev Equip" },
          { property: "og:title", content: importantTags.title },
          { property: "og:description", content: importantTags.description },
          { property: "og:image", content: `https://www.devequip.com/${jsonContent.thumbnail}` },
          { property: "og:url", content: importantTags.url },
          
          { name: "twitter:card", content: "summary_large_image" },
          { name: "twitter:title", content: importantTags.title },
          { name: "twitter:description", content: importantTags.description },
          { name: "twitter:image", content: `https://www.devequip.com/${jsonContent.thumbnail}` },
          
          { name: "copyright", content: "Dev Equip" },
          { name: "distribution", content: "global" }
        ];
      
        metaTags.forEach(tag => {
          let metaElement = document.querySelector(`meta[${Object.keys(tag)[0]}='${tag[Object.keys(tag)[0]]}']`);
          if (!metaElement) {
            metaElement = document.createElement('meta');
            metaElement.setAttribute(Object.keys(tag)[0], tag[Object.keys(tag)[0]]);
            document.head.appendChild(metaElement);
          }
          metaElement.setAttribute('content', tag.content);
        });
    },

    "faq" : () => {
        document.title = "FAQ — Dev Equip";
        const importantTags = {
            "title" : "FAQ",
            "description" : "Get answers to frequently asked questions from the Dev Equip Team.",
            "url": "https://www.devequip.com/faq"
        }


        const metaTags = [
          { itemprop: "name", content: importantTags.title },
          { itemprop: "description", content: importantTags.description },
          { itemprop: "image", content: "https://www.devequip.com/logo.png" },
          
          { name: "description", content: importantTags.description },
          { name: "author", content: "Dev Equip" },
          { name: "keywords", content: "dev, devs, developers, equip, equipment, roblox, unity, games, game, administrator, development, marketplace, store" },
          { name: "theme-color", content: "#000000" },
          
          { property: "og:site_name", content: "Dev Equip" },
          { property: "og:title", content: importantTags.title },
          { property: "og:description", content: importantTags.description },
          { property: "og:image", content: "https://www.devequip.com/logo.png" },
          { property: "og:image:width", content: "465" },
          { property: "og:image:height", content: "465" },
          { property: "og:url", content: importantTags.url },
          
          { name: "twitter:card", content: "summary" },
          { name: "twitter:title", content: importantTags.title },
          { name: "twitter:description", content: importantTags.description },
          { name: "twitter:image", content: "https://www.devequip.com/logo.png" },
          
          { name: "copyright", content: "Dev Equip" },
          { name: "distribution", content: "global" }
        ];
      
        metaTags.forEach(tag => {
          let metaElement = document.querySelector(`meta[${Object.keys(tag)[0]}='${tag[Object.keys(tag)[0]]}']`);
          if (!metaElement) {
            metaElement = document.createElement('meta');
            metaElement.setAttribute(Object.keys(tag)[0], tag[Object.keys(tag)[0]]);
            document.head.appendChild(metaElement);
          }
          metaElement.setAttribute('content', tag.content);
        });
    },

    "services" : () => {
        document.title = "Services — Dev Equip";
        const importantTags = {
            "title" : "Services",
            "description" : "Boost your productivity by commissioning us to develop assets for you.",
            "url": "https://www.devequip.com/services"
        }


        const metaTags = [
          { itemprop: "name", content: importantTags.title },
          { itemprop: "description", content: importantTags.description },
          { itemprop: "image", content: "https://www.devequip.com/logo.png" },
          
          { name: "description", content: importantTags.description },
          { name: "author", content: "Dev Equip" },
          { name: "keywords", content: "dev, devs, developers, equip, equipment, roblox, unity, games, game, administrator, development, marketplace, store" },
          { name: "theme-color", content: "#000000" },
          
          { property: "og:site_name", content: "Dev Equip" },
          { property: "og:title", content: importantTags.title },
          { property: "og:description", content: importantTags.description },
          { property: "og:image", content: "https://www.devequip.com/logo.png" },
          { property: "og:image:width", content: "465" },
          { property: "og:image:height", content: "465" },
          { property: "og:url", content: importantTags.url },
          
          { name: "twitter:card", content: "summary" },
          { name: "twitter:title", content: importantTags.title },
          { name: "twitter:description", content: importantTags.description },
          { name: "twitter:image", content: "https://www.devequip.com/logo.png" },
          
          { name: "copyright", content: "Dev Equip" },
          { name: "distribution", content: "global" }
        ];
      
        metaTags.forEach(tag => {
          let metaElement = document.querySelector(`meta[${Object.keys(tag)[0]}='${tag[Object.keys(tag)[0]]}']`);
          if (!metaElement) {
            metaElement = document.createElement('meta');
            metaElement.setAttribute(Object.keys(tag)[0], tag[Object.keys(tag)[0]]);
            document.head.appendChild(metaElement);
          }
          metaElement.setAttribute('content', tag.content);
        });
    },

    "contact" : () => {
        document.title = "Contact — Dev Equip";
        const importantTags = {
            "title" : "Contact",
            "description" : "Contact us through our email for support, bug reports, and more. Otherwise, reach us on Discord for a faster response!",
            "url": "https://www.devequip.com/contact"
        }


        const metaTags = [
          { itemprop: "name", content: importantTags.title },
          { itemprop: "description", content: importantTags.description },
          { itemprop: "image", content: "https://www.devequip.com/logo.png" },
          
          { name: "description", content: importantTags.description },
          { name: "author", content: "Dev Equip" },
          { name: "keywords", content: "dev, devs, developers, equip, equipment, roblox, unity, games, game, administrator, development, marketplace, store" },
          { name: "theme-color", content: "#000000" },
          
          { property: "og:site_name", content: "Dev Equip" },
          { property: "og:title", content: importantTags.title },
          { property: "og:description", content: importantTags.description },
          { property: "og:image", content: "https://www.devequip.com/logo.png" },
          { property: "og:image:width", content: "465" },
          { property: "og:image:height", content: "465" },
          { property: "og:url", content: importantTags.url },
          
          { name: "twitter:card", content: "summary" },
          { name: "twitter:title", content: importantTags.title },
          { name: "twitter:description", content: importantTags.description },
          { name: "twitter:image", content: "https://www.devequip.com/logo.png" },
          
          { name: "copyright", content: "Dev Equip" },
          { name: "distribution", content: "global" }
        ];
      
        metaTags.forEach(tag => {
          let metaElement = document.querySelector(`meta[${Object.keys(tag)[0]}='${tag[Object.keys(tag)[0]]}']`);
          if (!metaElement) {
            metaElement = document.createElement('meta');
            metaElement.setAttribute(Object.keys(tag)[0], tag[Object.keys(tag)[0]]);
            document.head.appendChild(metaElement);
          }
          metaElement.setAttribute('content', tag.content);
        });
    },
}