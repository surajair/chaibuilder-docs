# ChaiBuilder Documentation
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

- **<a href="https://chaibuilder.com" target="_blank" rel="noopener noreferrer">ChaiBuilder Website</a>** - Official website
- **<a href="https://github.com/chaibuilder" target="_blank" rel="noopener noreferrer">GitHub Repository</a>** - Source code
- **<a href="https://discord.gg/czkgwX2rnD" target="_blank" rel="noopener noreferrer">Discord Community</a>** - Join our community
