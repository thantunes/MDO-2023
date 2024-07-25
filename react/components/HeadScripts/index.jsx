import { useEffect } from "react";

const HeadScripts = () => {
  // useEffect(() => {
  //   const scriptElement = document.createElement("script");

  //   scriptElement.type = "module";
  //   scriptElement.src =
  //     "https://cdn.jsdelivr.net/npm/@typebot.io/js@0.2.60/dist/web.js";

  //   document.head.appendChild(scriptElement);

  //   scriptElement.onload = () => {
  //     window.Typebot.initBubble({
  //       typebot: "mercadao-v1-0v7r6c5",
  //       apiHost: "https://bot-ai01.htz01.ligerosmart.ai",
  //       theme: {
  //         button: { backgroundColor: "#0042DA" },
  //         chatWindow: { backgroundColor: "#fff" },
  //       },
  //     });
  //   };

  //   return () => {
  //     document.head.removeChild(scriptElement);
  //   };
  // }, []);

  useEffect(() => {
    // Cria um novo elemento de script
    const script = document.createElement('script');
    script.src = "https://prime.altubots.com/tag/mercadaodosoculos/a616e99fcc304320b43f2c76/tag.js";
    script.async = true;

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default HeadScripts;
