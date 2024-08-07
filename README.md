> **Note**: Beans is still in development, and the app is subject to change. The current version is `v1.0.0-beta.1`.

# Beans

Beans is a simple, lightweight, and fast note-taking app. It is designed to be a quick and easy way to jot down notes, ideas, and tasks. \
Beans is built with simplicity in mind, and it is perfect for anyone who wants a no-frills note-taking app.

## Features

- **Simple Interface**: Beans has a clean and minimalistic interface that is easy to use.
- **Fast**: Beans is designed to be fast and responsive, so you can quickly jot down notes without any lag.
- **Collaboration**: Beans allows you to share notes with others, so you can work together on projects.
- **Web-based**: Beans is a web-based app, so you can access your notes from anywhere with an internet connection.

## Installation

Beans is a web-based app, so there is no need to install anything. Simply visit the [Beans website](https://beans.salvatorearesco.com) to start using the app.

## Feedback

If you have any feedback or suggestions for Beans, please feel free to [contact me](mailto:salvatorearesco.work@gmail.com). I would love to hear from you!

---

## Developer Guide

### Getting Started

To get started with Beans, follow these steps:

1. Clone the repository: `git clone https://github.com/arscslvt/beans.git`
2. Install the dependencies: `npm install`
3. Start the development server: `npm run dev` or `bun run dev` (if you have Bun installed — [Install Bun](https://bun.sh/))

### Setup local Supabase instance

Beans uses Supabase as the backend for storing notes. To set up a local Supabase instance for development, follow these steps:

1. Install Docker: [Docker Installation Guide](https://docs.docker.com/get-docker/)
2. Make sure Docker is running. You can check by running `docker --version`.
3. You should see a `/supabase` folder in the root directory of the Beans project. This folder contains the necessary configuration files for setting up a local Supabase instance.
4. Run the following command to start the Supabase instance:

```bash
supabase start
```

5. Wait for the Supabase instance to start. You should see a message indicating that the instance is running.
6. Once the Supabase instance is running, it will print out the connection details. You can use these details to connect to the local Supabase instance from the Beans app.\
   Example connection details:

```bash
Started supabase local development setup.

         API URL: http://localhost:54321
          DB URL: postgresql://postgres:postgres@localhost:54322/postgres
      Studio URL: http://localhost:54323
    Inbucket URL: http://localhost:54324
        anon key: eyJh......
service_role key: eyJh......
```

Create a `.env.local` file in the root directory of the Beans project and add the following environment variables:

```bash
NEXT_PUBLIC_SUPABASE_URL=http://localhost:54321 (API URL)
NEXT_PUBLIC_SUPABASE_KEY=eyJh...... (service_role key)
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJh...... (anon key)
```

### Contributing

If you would like to contribute to Beans, please follow these guidelines:

- Fork the repository and create a new branch for your feature or bug fix.
- Make your changes and test them thoroughly.
- Create a pull request with a detailed description of your changes.
- Your pull request will be reviewed, and if everything looks good, it will be merged into the main branch.

### License

This work is licensed under a Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License.

The app can be forked and edited, but you cannot republish a version or use it for commercial purposes. The only official copy of Beans is the one published by Beans.

## Thank you for using Beans! 💜

I wanna thank you for using Beans and the GitHub community for supporting this project. \
I hope you enjoy using Beans as much as I enjoyed building it.

If you have any feedback or suggestions, please feel free to reach out to [@me](https://github.com/arscslvt). I'm always looking for ways to improve the app and make it better for everyone.

Happy note-taking! 📝

with ❤ love, \
Salvatore, Creator of Beans.
