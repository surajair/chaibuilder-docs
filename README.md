# Starlight Starter Kit: Basics

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

# ChaiBuilder Documentation

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

This is the official documentation for **ChaiBuilder** - the React-based visual website builder that empowers developers and content creators to build stunning websites with ease.

## 🚀 About ChaiBuilder

ChaiBuilder is a powerful, extensible visual website builder built with React and Tailwind CSS. It provides an intuitive drag-and-drop interface while maintaining the flexibility and power that developers need.

### Key Features
- **Visual Building**: Drag-and-drop interface for rapid development
- **React-Powered**: Built entirely with React and TypeScript
- **Tailwind Integration**: First-class Tailwind CSS support
- **Extensible**: Create custom blocks and extend functionality
- **Production Ready**: Clean code output and optimized performance

## 🏗️ Project Structure

```
.
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and media files
│   ├── content/
│   │   └── docs/          # Documentation content
│   │       ├── overview/          # About ChaiBuilder
│   │       ├── developers/        # Developer guides
│   │       ├── editors/           # Editor tutorials  
│   │       ├── open-source/       # Open source packages
│   │       ├── guides/            # How-to guides
│   │       └── reference/         # API reference
│   ├── styles/            # Custom CSS
│   └── content.config.ts  # Content configuration
├── astro.config.mjs       # Astro configuration
├── package.json           # Dependencies
└── tsconfig.json         # TypeScript configuration
```

## 🧞 Commands

All commands are run from the root of the project:

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `pnpm install`         | Install dependencies                               |
| `pnpm dev`             | Start local dev server at `localhost:4321`        |
| `pnpm build`           | Build your production site to `./dist/`           |
| `pnpm preview`         | Preview your build locally, before deploying      |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check`  |
| `pnpm astro -- --help` | Get help using the Astro CLI                      |

## 📝 Contributing

We welcome contributions to improve the ChaiBuilder documentation! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/improve-docs`
3. **Make your changes**: Update or add documentation
4. **Test locally**: Run `pnpm dev` to preview changes
5. **Submit a pull request**: Describe your improvements

### Writing Guidelines

- Use clear, concise language
- Include code examples where helpful
- Add screenshots for visual features
- Follow the existing structure and style
- Test all links and code samples

## 🌟 Documentation Structure

### For Different Audiences

- **👨‍💼 Content Creators**: Visual guides for using ChaiBuilder's interface
- **👩‍💻 Developers**: Technical implementation and customization guides  
- **🏢 Agencies**: Best practices for client projects and scaling
- **🔧 Contributors**: Open source development and contribution guides

### Content Types

- **📖 Tutorials**: Step-by-step learning paths
- **📋 How-to Guides**: Specific task-oriented instructions
- **📚 Reference**: Comprehensive API and configuration documentation
- **💡 Explanations**: Conceptual overviews and architectural decisions

## 🔗 Links

- **[ChaiBuilder Website](https://chaibuilder.com)** - Official website
- **[GitHub Repository](https://github.com/chaibuilder/chaibuilder)** - Source code
- **[Discord Community](https://discord.gg/chaibuilder)** - Join our community
- **[Demo Site](https://demo.chaibuilder.com)** - Try ChaiBuilder live

## 📄 License

This documentation is licensed under [MIT License](LICENSE). 

ChaiBuilder is open source software licensed under the [MIT License](https://github.com/chaibuilder/chaibuilder/blob/main/LICENSE).

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro + Starlight project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   └── docs/
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [Starlight’s docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord server](https://astro.build/chat).
