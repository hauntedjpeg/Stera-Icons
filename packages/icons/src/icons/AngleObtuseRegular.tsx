import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AngleObtuseRegularProps = Omit<IconBaseProps, 'children'>;

const AngleObtuseRegular = memo(
  forwardRef<SVGSVGElement, AngleObtuseRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21.4 14.16c.4-.1.81.13.92.53v.02c.1.4-.13.8-.53.91s-.81-.13-.92-.53.13-.82.53-.93M20.02 11.35c.35-.21.81-.09 1.02.27.21.37.1.83-.27 1.03-.36.21-.82.09-1.02-.27v-.01c-.21-.36-.1-.82.27-1.02M17.95 8.98c.3-.3.77-.3 1.06 0h.01c.3.3.3.78 0 1.07s-.77.3-1.06 0-.3-.78 0-1.07M15.35 7.23c.2-.36.66-.48 1.02-.28l.01.01c.36.2.48.67.27 1.02-.2.36-.66.49-1.02.28-.37-.21-.49-.67-.28-1.03M4.04 6.72c.37-.19.82-.05 1.02.32.19.36.05.82-.32 1.01s-.82.06-1.02-.3c-.2-.37-.05-.83.31-1.02zM12.38 6.21c.1-.4.52-.64.92-.53s.64.52.54.92c-.11.4-.52.64-.92.53h-.01c-.4-.1-.64-.52-.53-.92M6.93 5.62c.4-.1.81.15.91.55s-.14.8-.55.9v.01c-.4.1-.81-.15-.91-.55s.14-.8.54-.9zM10 5.25c.42 0 .76.34.76.75s-.34.75-.75.75H10c-.42 0-.75-.34-.75-.75s.33-.75.75-.75M1.5 8.5c.31-.28.79-.26 1.06.05l7.78 8.7H22c.41 0 .75.34.75.75s-.34.75-.75.75H10q-.33-.01-.56-.25l-8-8.95c-.27-.3-.25-.78.06-1.06" />
    </IconBase>
  ))
);

AngleObtuseRegular.displayName = 'AngleObtuseRegular';

// Triple export pattern
export { AngleObtuseRegular, AngleObtuseRegular as AngleObtuseRegularIcon, AngleObtuseRegular as SiAngleObtuseRegular };
export default AngleObtuseRegular;
export type { AngleObtuseRegularProps };
