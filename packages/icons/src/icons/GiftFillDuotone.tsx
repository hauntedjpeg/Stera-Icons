import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GiftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const GiftFillDuotone = memo(
  forwardRef<SVGSVGElement, GiftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4.13 13.77q.24.07.48.09.38.02.89.02h5.63v7H8.2q-.82.01-1.38-.04-.6-.03-1.13-.28-.83-.42-1.25-1.25-.25-.54-.28-1.13-.05-.56-.04-1.38zM19.88 16.8q.01.82-.04 1.38-.03.6-.28 1.13-.42.83-1.25 1.25-.54.25-1.13.28-.56.05-1.38.04h-2.93v-7h5.63q.51 0 .9-.02.22-.02.48-.09z" opacity={0.4} />
        <path fillRule="evenodd" d="M14.9 2.14c.78-.09 1.54.2 2.15.8.62.62.9 1.38.8 2.16-.07.76-.48 1.43-1.02 1.97l-.06.06H7.23l-.06-.06c-.54-.54-.95-1.21-1.03-1.97-.09-.78.2-1.54.8-2.15.62-.62 1.38-.9 2.16-.8.76.07 1.43.48 1.97 1.02q.53.53.93 1.27.4-.74.93-1.27c.54-.54 1.21-.95 1.97-1.03m-6 1.74c-.2-.02-.44.03-.72.3-.27.28-.32.52-.3.73.03.24.18.57.53.92.55.55 1.5 1.04 2.64 1.22-.18-1.15-.67-2.09-1.22-2.64q-.54-.5-.92-.53m6.2 0q-.39.02-.93.53c-.55.55-1.04 1.5-1.22 2.64 1.15-.18 2.09-.67 2.64-1.22.35-.35.5-.68.53-.92.02-.21-.03-.45-.3-.73-.28-.27-.52-.32-.73-.3" clipRule="evenodd" opacity={0.4} />
        <path fillRule="evenodd" d="m18.5 7.13.9.01q.4.03.81.22.61.32.93.93.2.41.22.82.02.38.02.89v1q0 .51-.02.9c-.03.26-.07.54-.22.81q-.32.62-.93.93-.41.2-.82.22-.38.02-.89.02h-5.62v7h-1.76v-7H5.5q-.51 0-.9-.02c-.26-.03-.54-.07-.81-.22q-.62-.31-.93-.93-.2-.41-.22-.82-.02-.38-.01-.89v-1l.01-.9q.03-.4.22-.81.32-.62.93-.93.41-.2.82-.22.38-.02.89-.01zm-13 1.75h-.75l-.17.04q-.11.05-.16.16 0 0-.03.17l-.01.75v1.75l.04.17q.05.11.16.16 0 0 .17.03l.75.02h5.63V8.88zm7.38 3.24h6.37l.17-.04q.11-.05.16-.16 0 0 .03-.17l.02-.75v-1q0-.52-.02-.75 0-.17-.03-.17-.05-.11-.16-.16 0 0-.17-.03l-.75-.01h-5.62z" clipRule="evenodd" />
    </IconBase>
  ))
);

GiftFillDuotone.displayName = 'GiftFillDuotone';

// Triple export pattern
export { GiftFillDuotone, GiftFillDuotone as GiftFillDuotoneIcon, GiftFillDuotone as SiGiftFillDuotone };
export default GiftFillDuotone;
export type { GiftFillDuotoneProps };
