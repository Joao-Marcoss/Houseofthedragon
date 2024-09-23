document.addEventListener("DOMContentLoaded", () => {
  const cards = [
    {
      buttonId: "to-viserys-dragon",
      cardId: "viserys-card",
      hiddenCardId: "viserys-dragon-card",
    },
    {
      buttonId: "to-viserys-character",
      cardId: "viserys-dragon-card",
      hiddenCardId: "viserys-card",
    },

    {
      buttonId: "to-rhaenyra-dragon",
      cardId: "rhaenyra-card",
      hiddenCardId: "rhaenyra-dragon-card",
    },
    {
      buttonId: "to-rhaenyra-character",
      cardId: "rhaenyra-dragon-card",
      hiddenCardId: "rhaenyra-card",
    },

    {
      buttonId: "to-daemon-dragon",
      cardId: "daemon-card",
      hiddenCardId: "daemon-dragon-card",
    },
    {
      buttonId: "to-daemon-character",
      cardId: "daemon-dragon-card",
      hiddenCardId: "daemon-card",
    },

    {
      buttonId: "to-aemond-dragon",
      cardId: "aemond-card",
      hiddenCardId: "aemond-dragon-card",
    },
    {
      buttonId: "to-aemond-character",
      cardId: "aemond-dragon-card",
      hiddenCardId: "aemond-card",
    },

    {
      buttonId: "to-rhaenys-dragon",
      cardId: "rhaenys-card",
      hiddenCardId: "rhaenys-dragon-card",
    },
    {
      buttonId: "to-rhaenys-character",
      cardId: "rhaenys-dragon-card",
      hiddenCardId: "rhaenys-card",
    },

    {
      buttonId: "to-aegon-dragon",
      cardId: "aegon-card",
      hiddenCardId: "aegon-dragon-card",
    },
    {
      buttonId: "to-aegon-character",
      cardId: "aegon-dragon-card",
      hiddenCardId: "aegon-card",
    },
    {
      buttonId: "to-jacaerys-dragon",
      cardId: "jacaerys-card",
      hiddenCardId: "jacaerys-dragon-card",
    },
    {
      buttonId: "to-jacaerys-character",
      cardId: "jacaerys-dragon-card",
      hiddenCardId: "jacaerys-card",
    },

    {
      buttonId: "to-hugh-dragon",
      cardId: "hugh-card",
      hiddenCardId: "hugh-dragon-card",
    },
    {
      buttonId: "to-hugh-character",
      cardId: "hugh-dragon-card",
      hiddenCardId: "hugh-card",
    },

    {
      buttonId: "to-baela-dragon",
      cardId: "baela-card",
      hiddenCardId: "baela-dragon-card",
    },
    {
      buttonId: "to-baela-character",
      cardId: "baela-dragon-card",
      hiddenCardId: "baela-card",
    },
    {
      buttonId: "to-joffrey-dragon",
      cardId: "joffrey-card",
      hiddenCardId: "joffrey-dragon-card",
    },
    {
      buttonId: "to-joffrey-character",
      cardId: "joffrey-dragon-card",
      hiddenCardId: "joffrey-card",
    },

    {
      buttonId: "to-ulf-dragon",
      cardId: "ulf-card",
      hiddenCardId: "ulf-dragon-card",
    },
    {
      buttonId: "to-ulf-character",
      cardId: "ulf-dragon-card",
      hiddenCardId: "ulf-card",
    },

    {
      buttonId: "to-addam-dragon",
      cardId: "addam-card",
      hiddenCardId: "addam-dragon-card",
    },
    {
      buttonId: "to-addam-character",
      cardId: "addam-dragon-card",
      hiddenCardId: "addam-card",
    },
  ];

  cards.forEach(({ buttonId, cardId, hiddenCardId }) => {
    const button = document.getElementById(buttonId);
    const card = document.getElementById(cardId);
    const hiddenCard = document.getElementById(hiddenCardId);

    button.addEventListener("click", () => {
      card.classList.add("hidden");
      hiddenCard.classList.remove("hidden");
    });
  });
});
