
import * as vscode from 'vscode';

const { WLED, Preset } = require("wled");
const config = vscode.workspace.getConfiguration('wled-syntax-checker');
const wledIpAddress = config.get('IPAddress') || '127.0.0.1';
const wledBrightness = config.get('Brightness') || '128';
const wled = new WLED(wledIpAddress);

async function handleDiagnosticChange(uri: vscode.Uri) {
	const diagnostics = vscode.languages.getDiagnostics(uri);

	const hasErrors = diagnostics.some((diagnostic) => diagnostic.severity === vscode.DiagnosticSeverity.Error);

	if (hasErrors) {
		await wled.setOn(true);
		await wled.setColor([255, 0, 0]);
		await wled.setBrightness(wledBrightness);
	} else {
		await wled.setOn(true);
		await wled.setColor([0, 255, 0]);
		await wled.setBrightness(wledBrightness);
	}
}

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(
		vscode.languages.onDidChangeDiagnostics((event) => {
			event.uris.forEach((uri) => handleDiagnosticChange(uri));
		})
	);
}


export function deactivate() { }
