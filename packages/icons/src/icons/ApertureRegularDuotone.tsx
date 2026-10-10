import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ApertureRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ApertureRegularDuotone = memo(
  forwardRef<SVGSVGElement, ApertureRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="m9.6 8.93.02-.02.09-.06.13-.1.17-.1.05-.03.05-.03 6.23-3.6q.7.43 1.3.99l-4.18 2.4.04.02.1.05.12.05.17.1.06.02.05.03 6.24 3.6q-.02.84-.2 1.62l-4.18-2.41v.05l.02.13.01.12v7.51q-.7.39-1.5.62v-4.82q-.08.08-.18.14l-.04.03-.17.1-.05.04-.05.03L7.65 19q-.7-.43-1.28-.99l4.17-2.4-.03-.01-.06-.03-.09-.04-.09-.05-.18-.1-.04-.01-.05-.03-.02-.01-6.22-3.6q.02-.83.2-1.6l4.18 2.4-.02-.16-.01-.11v-.2L8.1 12V4.73q.71-.4 1.5-.62zm2.4.67q-.15 0-.29.02-.1 0-.2.03l-.06.01-.22.06-.01.01-.23.09-.15.07-.02.02h-.01l-.01.01-.13.08-.3.24-.07.06q-.16.17-.3.37l-.05.08q0 .02-.03.05v.02H9.9l-.06.1q-.1.21-.16.42l-.05.21-.03.2-.01.2v.21l.05.35.05.18.09.25.04.07.08.16.09.16v.01l.3.36.15.13.2.15.1.07.18.1q.14.08.32.13l.15.04.23.05.2.02H12q.32 0 .62-.07l.13-.04.13-.05.28-.13.03-.01.15-.1.04-.03.09-.06.07-.06.06-.05.12-.12q.1-.09.17-.2l.18-.25v-.02l.03-.04q.15-.28.23-.58l.01-.06q.05-.17.05-.36v-.19q0-.3-.07-.57l-.04-.16q-.07-.21-.19-.41l-.03-.06-.08-.12-.08-.12-.09-.1-.1-.12-.11-.1-.2-.16h-.01l-.15-.1-.08-.05q-.3-.15-.58-.23l-.13-.03-.3-.03h-.03z" clipRule="evenodd" />
    </IconBase>
  ))
);

ApertureRegularDuotone.displayName = 'ApertureRegularDuotone';

// Triple export pattern
export { ApertureRegularDuotone, ApertureRegularDuotone as ApertureRegularDuotoneIcon, ApertureRegularDuotone as SiApertureRegularDuotone };
export default ApertureRegularDuotone;
export type { ApertureRegularDuotoneProps };
