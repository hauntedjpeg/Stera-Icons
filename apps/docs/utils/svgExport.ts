export function getSVGData(
  selector: string,
  prettyName: string,
  weight: string,
  duotone: boolean
): string {
  const svgElement = document.querySelector(selector);
  if (svgElement) {
    const clonedSvg = svgElement.cloneNode(true) as SVGElement;
    const weightLabel = weight.charAt(0).toUpperCase() + weight.slice(1);
    const variantLabel = duotone ? `${weightLabel}-Duotone` : weightLabel;
    clonedSvg.setAttribute('id', `${prettyName}-${variantLabel}`);
    return new XMLSerializer().serializeToString(clonedSvg);
  }
  return '';
}

export function downloadSVG(svgData: string, filename: string): void {
  if (svgData) {
    const blob = new Blob([svgData], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
}

export function getSVGFilename(iconName: string, weight: string, duotone: boolean): string {
  return duotone
    ? `${iconName.toLowerCase()}-${weight}-duotone.svg`
    : `${iconName.toLowerCase()}-${weight}.svg`;
}
