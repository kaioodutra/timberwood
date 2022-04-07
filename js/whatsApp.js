var url =
  "https://wati-integration-service.clare.ai/ShopifyWidget/shopifyWidget.js?74912"
var s = document.createElement("script")
s.type = "text/javascript"
s.async = true
s.src = url
var options = {
  enabled: true,
  chatButtonSetting: {
    backgroundColor: "#25d366",
    ctaText: "",
    borderRadius: "25",
    marginLeft: "0",
    marginBottom: "30",
    marginRight: "20",
    position: "right",
  },
  brandSetting: {
    brandName: "Timber Wood",
    brandSubTitle: "Online",
    brandImg: "./assets/favicon.png",
    welcomeText: "Olá. Em que podemos ajudar?",
    messageText:
      "Olá. Vim através do botão de WhatsApp do site da Timber Wood.",
    backgroundColor: "#128c7e",
    ctaText: "Iniciar Conversa",
    borderRadius: "25",
    autoShow: false,
    phoneNumber: "+5511932927090",
  },
}
s.onload = function () {
  CreateWhatsappChatWidget(options)
}
var x = document.getElementsByTagName("script")[0]
x.parentNode.insertBefore(s, x)
