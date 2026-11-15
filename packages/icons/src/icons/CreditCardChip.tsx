import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { CreditCardChipRegular } from './CreditCardChipRegular.js';
import { CreditCardChipRegularDuotone } from './CreditCardChipRegularDuotone.js';
import { CreditCardChipBold } from './CreditCardChipBold.js';
import { CreditCardChipBoldDuotone } from './CreditCardChipBoldDuotone.js';
import { CreditCardChipFill } from './CreditCardChipFill.js';
import { CreditCardChipFillDuotone } from './CreditCardChipFillDuotone.js';

export interface CreditCardChipProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CreditCardChip - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CreditCardChipRegular } from 'stera-icons/icons/CreditCardChipRegular';
 */
const CreditCardChip = memo(forwardRef<SVGSVGElement, CreditCardChipProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <CreditCardChipBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CreditCardChipBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CreditCardChipFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CreditCardChipFill ref={ref} {...rest} />;
  if (duotone) return <CreditCardChipRegularDuotone ref={ref} {...rest} />;
  return <CreditCardChipRegular ref={ref} {...rest} />;
}));

CreditCardChip.displayName = 'CreditCardChip';

// Triple export pattern
export { CreditCardChip, CreditCardChip as CreditCardChipIcon, CreditCardChip as SiCreditCardChip };
export default CreditCardChip;
