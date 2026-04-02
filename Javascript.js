 var form = document.getElementById("order");

    form.addEventListener("submit", function(e) {
      e.preventDefault();

      var name = document.getElementById("name").value;
      var phone = document.getElementById("phone").value;

      if (!name || !phone) {
        alert("Заповніть усі поля!");
        return;
      }

      var TOKEN = "8739407470:AAFpBTpWwfBGvjh6kuc1hepBe84AaK-tAV4"; // твій Telegram бот
      var CHAT_ID = "7573872009"; // твій chat_id

      var message = "🔥 Нова заявка на вихлопну трубу!\n\n" +
                    "👤 Ім'я: " + name + "\n" +
                    "📞 Телефон: " + phone;

      fetch("https://api.telegram.org/bot" + TOKEN + "/sendMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: CHAT_ID, text: message })
      })
      .then(function(res){ return res.json(); })
      .then(function(data){
        if(data.ok){
          alert("Заявка відправлена 🚀");
          form.reset();
        } else {
          alert("Помилка при відправці 😢");
          console.log(data);
        }
      })
      .catch(function(err){
    console.warn("CORS/Network Error, але повідомлення могло бути відправлено");
        form.reset();
      });
    });
