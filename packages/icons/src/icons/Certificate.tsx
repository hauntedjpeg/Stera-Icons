import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { CertificateRegular } from './CertificateRegular.js';
import { CertificateRegularDuotone } from './CertificateRegularDuotone.js';
import { CertificateBold } from './CertificateBold.js';
import { CertificateBoldDuotone } from './CertificateBoldDuotone.js';
import { CertificateFill } from './CertificateFill.js';
import { CertificateFillDuotone } from './CertificateFillDuotone.js';

export interface CertificateProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Certificate - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CertificateRegular } from 'stera-icons/icons/CertificateRegular';
 */
const Certificate = memo(forwardRef<SVGSVGElement, CertificateProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CertificateBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CertificateBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CertificateFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CertificateFill ref={ref} {...rest} />;
  if (duotone) return <CertificateRegularDuotone ref={ref} {...rest} />;
  return <CertificateRegular ref={ref} {...rest} />;
}));

Certificate.displayName = 'Certificate';

// Triple export pattern (lucide-react style)
export { Certificate, Certificate as CertificateIcon, Certificate as SiCertificate };
export default Certificate;
