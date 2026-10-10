import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlignHorizontalCenterBoldProps = Omit<IconBaseProps, 'children'>;

const AlignHorizontalCenterBold = memo(
  forwardRef<SVGSVGElement, AlignHorizontalCenterBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c.55 0 1 .45 1 1v2.25h5.4q.4 0 .74.02.36.01.77.2.5.26.8.73l.07.14.09.2q.1.3.11.57.02.34.02.74v.8q0 .4-.02.74-.01.36-.2.77-.3.57-.87.87-.41.19-.77.2-.34.02-.74.02H13v1.5h2q.5 0 .9.02.36.02.76.17l.11.06.16.08q.54.34.82.9c.16.3.2.6.23.87q.03.4.02.9t-.02.9-.23.87q-.33.65-.98.98c-.3.16-.6.2-.87.23q-.4.03-.9.02h-2V21c0 .55-.45 1-1 1s-1-.45-1-1v-2.25H9q-.5 0-.9-.02-.41-.01-.87-.23-.65-.33-.98-.98c-.16-.3-.2-.6-.23-.87q-.03-.4-.02-.9t.02-.9q.01-.41.23-.87.33-.65.98-.98c.3-.16.6-.2.87-.23q.4-.03.9-.02h2v-1.5H5.6q-.4 0-.74-.02-.36-.01-.77-.2-.57-.3-.87-.87c-.14-.27-.18-.54-.2-.77Q3 9.05 3 8.65v-.8q0-.4.02-.74c.02-.23.06-.5.2-.77q.3-.57.87-.87c.27-.14.54-.18.77-.2q.34-.02.74-.02H11V3c0-.55.45-1 1-1M9 14.75l-.74.01-.13.02q-.06.04-.1.1l-.02.13-.01.74.01.74.02.13q.04.06.1.1l.13.02.74.01h6l.74-.01.13-.02.1-.1.02-.13.01-.74-.01-.74-.02-.13q-.04-.07-.1-.1l-.13-.02-.74-.01zm-3.4-7.5-.58.01v.01C5 7.4 5 7.55 5 7.85v.8l.01.58h.01c.12.02.28.02.58.02h12.8l.58-.01v-.01c.02-.12.02-.28.02-.58v-.8l-.01-.58h-.01c-.12-.02-.28-.02-.58-.02z" clipRule="evenodd" />
    </IconBase>
  ))
);

AlignHorizontalCenterBold.displayName = 'AlignHorizontalCenterBold';

// Triple export pattern
export { AlignHorizontalCenterBold, AlignHorizontalCenterBold as AlignHorizontalCenterBoldIcon, AlignHorizontalCenterBold as SiAlignHorizontalCenterBold };
export default AlignHorizontalCenterBold;
export type { AlignHorizontalCenterBoldProps };
