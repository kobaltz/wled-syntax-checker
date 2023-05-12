# WLED Syntax Checker README

This Visual Studio Code (VSCode) extension is designed to check your WLED syntax and provide real-time feedback, making it easier to develop and debug your projects. This document provides a brief overview of the extension's features, requirements, installation process, and configuration settings.

**Table of Contents**
1. [Features](#features)
2. [Requirements](#requirements)
3. [Installation](#installation)
4. [Configuration](#configuration)
5. [Usage](#usage)
6. [Troubleshooting](#troubleshooting)
7. [Support](#support)
9. [License](#license)

## Features

- Real-time (or whatever your LSP supports)syntax checking and validation for WLED projects
- Visual feedback through WLED device: Green for no errors, Red for syntax errors

## Requirements

- A working WLED installation on the same network as your VSCode installation
- LSP extensions for VSCode

## Installation

1. (optional) Install the WLED firmware on your device by visiting [https://install.wled.me/](https://install.wled.me/).
2. Install the WLED Syntax Checker extension in VSCode using the Extensions panel or through the [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/).

## Configuration

1. Open the Settings editor in VSCode by clicking on the gear icon in the lower left corner and selecting "Settings".
2. In the search bar, type "WLED" to filter the settings related to the WLED Syntax Checker extension.
3. Enter the IP address or hostname of your WLED installation in the "IPAddress" setting.
4. (optional) Set the "Brightness" setting. 0 is off, 255 is full brightness.

## Usage

1. Open a project in VSCode.
2. The extension will automatically connect to the WLED installation and display the current state of your file.
3. Fix any syntax errors based on the visual feedback provided by the WLED device.

## Troubleshooting

If you encounter any issues, please try the following steps:

1. Ensure that your WLED device is properly connected to your network.
2. Confirm that your WLED installation is reachable on your network by visiting its IP address or hostname in a web browser.
3. Double-check the "IP Address" setting in your VSCode configuration.

If the issue persists, please open an issue on the GitHub repository.

## License

This project is licensed under the [MIT License](LICENSE.md).
