function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    pesan: document.getElementById("pesan").value,
  };

  const serviceID = "service_774k2rt";
  const templateID = "template_etcuh2e";

  emailjs.send(serviceID, templateID, params).then((res) => {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("pesan").value = "";
    console.log(res);
    alert("your message send successfully");
  });
}
