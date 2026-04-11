import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GiftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const GiftFillDuotone = memo(
  forwardRef<SVGSVGElement, GiftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4.13 13.77q.24.07.48.09.38.02.89.02h5.63v7H8.2q-.82.01-1.38-.04-.6-.03-1.13-.28a3 3 0 0 1-1.25-1.25 3 3 0 0 1-.28-1.13q-.05-.56-.04-1.38zM19.88 16.8q.01.82-.04 1.38-.03.6-.28 1.13-.42.83-1.25 1.25-.54.25-1.13.28-.56.05-1.38.04h-2.93v-7h5.63q.51 0 .9-.02.22-.02.48-.09z" opacity={0.4} />
        <path fillRule="evenodd" d="M14.9 2.14a2.6 2.6 0 0 1 2.15.8c.62.62.9 1.38.8 2.16a3.4 3.4 0 0 1-1.02 1.97l-.06.06H7.23l-.06-.06A3.4 3.4 0 0 1 6.14 5.1a2.6 2.6 0 0 1 .8-2.15 2.6 2.6 0 0 1 2.16-.8c.76.07 1.43.48 1.97 1.02q.53.53.93 1.27.4-.74.93-1.27a3.4 3.4 0 0 1 1.97-1.03m-6 1.74c-.2-.02-.44.03-.72.3-.27.28-.32.52-.3.73.03.24.18.57.53.92.55.55 1.5 1.04 2.64 1.22a5 5 0 0 0-1.22-2.64q-.54-.5-.92-.53m6.2 0q-.39.02-.93.53a5 5 0 0 0-1.22 2.64 5 5 0 0 0 2.64-1.22c.35-.35.5-.68.53-.92.02-.21-.03-.45-.3-.73-.28-.27-.52-.32-.73-.3" clipRule="evenodd" opacity={0.4} />
        <path fillRule="evenodd" d="m18.5 7.13.9.01q.4.03.81.22.61.32.93.93.2.41.22.82.02.38.02.89v1q0 .51-.02.9a2.13 2.13 0 0 1-1.14 1.75q-.42.18-.83.2-.38.04-.89.03h-5.62v7h-1.76v-7H5.5q-.51 0-.9-.02a2 2 0 0 1-.81-.22q-.62-.31-.93-.93a2 2 0 0 1-.22-.82q-.02-.38-.01-.89v-1l.01-.9q.03-.4.22-.81.32-.62.93-.93.41-.2.82-.22.38-.02.89-.01zm-13 1.75a11 11 0 0 0-.92.04.4.4 0 0 0-.16.16l-.03.17-.01.75v1a11 11 0 0 0 .04.92q.05.11.16.16l.17.03.75.02h5.63V8.88zm7.38 3.24h5.62a11 11 0 0 0 .92-.04q.11-.05.16-.16l.03-.17.02-.75v-1a11 11 0 0 0-.05-.92.4.4 0 0 0-.16-.16l-.17-.03-.75-.01h-5.62z" clipRule="evenodd" />
    </IconBase>
  ))
);

GiftFillDuotone.displayName = 'GiftFillDuotone';

// Triple export pattern (lucide-react style)
export { GiftFillDuotone, GiftFillDuotone as GiftFillDuotoneIcon, GiftFillDuotone as SiGiftFillDuotone };
export default GiftFillDuotone;
export type { GiftFillDuotoneProps };
