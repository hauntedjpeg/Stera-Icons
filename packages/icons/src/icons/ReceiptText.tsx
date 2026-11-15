import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ReceiptTextRegular } from './ReceiptTextRegular.js';
import { ReceiptTextRegularDuotone } from './ReceiptTextRegularDuotone.js';
import { ReceiptTextBold } from './ReceiptTextBold.js';
import { ReceiptTextBoldDuotone } from './ReceiptTextBoldDuotone.js';
import { ReceiptTextFill } from './ReceiptTextFill.js';
import { ReceiptTextFillDuotone } from './ReceiptTextFillDuotone.js';

export interface ReceiptTextProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ReceiptText - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ReceiptTextRegular } from 'stera-icons/icons/ReceiptTextRegular';
 */
const ReceiptText = memo(forwardRef<SVGSVGElement, ReceiptTextProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <ReceiptTextBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ReceiptTextBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ReceiptTextFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ReceiptTextFill ref={ref} {...rest} />;
  if (duotone) return <ReceiptTextRegularDuotone ref={ref} {...rest} />;
  return <ReceiptTextRegular ref={ref} {...rest} />;
}));

ReceiptText.displayName = 'ReceiptText';

// Triple export pattern
export { ReceiptText, ReceiptText as ReceiptTextIcon, ReceiptText as SiReceiptText };
export default ReceiptText;
