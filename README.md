# Welcomer Bot Template

🚀 **Welcomer Bot Template** is a flexible and user-friendly Discord bot template designed to help anyone set up a custom bot for welcoming members to their server. This project is written in **Node.js** using the **discord.js v14** library.

---

## 🖯 Features
- 🚐 **Automated Welcoming**: Customizable welcome messages for new members.
- 🔔 **Notifications**: Sends welcome messages to a designated channel.
- 🌟 **Customizable**: Easily adjust the style and content of welcome messages.
- 💂 **Modular Design**: Simplified and organized code for easier maintenance and expansion.
- 🔧 **Flexible Configuration**: `.env` file for managing tokens and settings.

---

## 🛠️ Installation

Follow these steps to install and run the bot:

1. Clone the repository:
   ```bash
   git clone https://github.com/kalue05/welcomer-bot-template.git
   ```

2. Navigate to the project directory:
   ```bash
   cd welcomer-bot-template
   ```

3. Install dependencies:
   ```bash
   npm install chalk@4.1.2
   npm install
   ```

4. Create a `.env` file:
   ```plaintext
   TOKEN=your-bot-token
   CHANNEL_ID=your_channel_id
   GUILDD_ID=your_guild_id
   ```
   Replace `your_bot_token` with your Discord bot token.
   Replace `your_channel_id` with the ID of the channel where you want the bot to send welcome messages.
   Replace `your_guild_id` with the ID of the server where the bot will operate.

5. Start the bot:
   ```bash
   node index.js
   ```

The bot should now be running and ready to welcome new members!
[Image of the bot in action](./welcomer.png)

---

## 💂 Project Structure

```
/src
   /Events         # Event handlers (e.g., Ready.js, GuildMemberAdd.js)
   /Handlers       # Main handlers for events
   /utils          # Utility functions
.env               # Token and configurations
index.js           # Bot's entry point
```

---

## 🧑‍💻 How to Use
1. Customize the welcome messages in the `GuildMemberAdd.js` file (or other relevant files in the `/Events` folder).
2. Set the welcome channel by using the channel ID.
3. Add new functionalities as needed – the project is modular and easy to extend.

---

## 📜 Requirements
- Node.js v16.9.0 or higher
- Discord.js v14
- `.env` file for configuration management

---

## 📖 Documentation

### Setting a Welcome Message
In the `GuildMemberAdd.js` file:
```javascript
const embed = new EmbedBuilder()
        .setTitle(`Title goes here`)
        .setDescription(`Description goes here`)
        .setColor(`#00FF2D`)
        .addFields(
            { name: `Field #1`, value: `Value of Field #1`, inline: true },
            { name: `Field #2`, value: `Value of Field #2`, inline: false }
        )
        .setFooter({
            text: `Footer text goes here`,
            iconURL: member.user.displayAvatarURL({ dynamic: true })
        })
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
```
Replace all strings or links with your messages or links.

---

## 🤝 Contributing

Contributions are welcome! If you have ideas or want to report a bug:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Submit a **pull request**.

---

## 📜 License

This project is licensed under the [MIT License](./LICENSE).

---

## 📞 Contact
- Discord: kaluye05
- GitHub: [kaluye05](https://github.com/kaluye05)
