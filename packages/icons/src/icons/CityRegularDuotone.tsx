import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CityRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CityRegularDuotone = memo(
  forwardRef<SVGSVGElement, CityRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m16.67 8.75-.76.01-.22.04q-.15.08-.22.22-.01 0-.04.22l-.01.76v9.25h-1.5V14q0-.52-.02-.76c-.01-.16-.03-.2-.04-.22q-.07-.14-.22-.22.02 0-.21-.04l-.76-.01h-1.34l-.76.01c-.16.02-.2.04-.21.04q-.15.08-.22.22-.01 0-.04.22-.02.24-.02.76v5.25h-1.5V6l-.01-.76c-.01-.16-.04-.2-.04-.22q-.08-.15-.22-.22l-.22-.04-.76-.01H6l-.76.01-.22.04q-.15.08-.22.22l-.04.22-.01.76v13.25h-1.5V6q0-.51.02-.88.02-.39.2-.78.3-.57.87-.87.39-.18.78-.2.37-.02.88-.02h1.33q.51 0 .89.02t.77.2q.58.3.88.87c.13.26.17.52.2.78l.01.88v5.32l.37-.05q.38-.02.88-.02h1.34q.5 0 .88.02.18.01.37.05V10q0-.52.02-.88.01-.39.2-.78.3-.57.87-.87.39-.18.78-.2.36-.02.88-.02H18q.52 0 .88.02.39.02.78.2.57.3.87.87.18.39.2.78.02.36.02.88v9.25h-1.5V10l-.01-.76-.04-.22q-.08-.14-.22-.22l-.22-.04-.76-.01z" opacity={.4} />
        <path d="M5.92 8V7c0-.41.33-.75.75-.75.41 0 .75.34.75.75v1c0 .41-.34.75-.75.75-.42 0-.75-.34-.75-.75M5.92 12v-1c0-.41.33-.75.75-.75.41 0 .75.34.75.75v1c0 .41-.34.75-.75.75-.42 0-.75-.34-.75-.75M16.58 12v-1c0-.41.34-.75.75-.75.42 0 .75.34.75.75v1c0 .41-.33.75-.75.75-.41 0-.75-.34-.75-.75M5.92 16v-1c0-.41.33-.75.75-.75.41 0 .75.34.75.75v1c0 .41-.34.75-.75.75-.42 0-.75-.34-.75-.75M11.25 16v-1c0-.41.34-.75.75-.75s.75.34.75.75v1c0 .41-.34.75-.75.75s-.75-.34-.75-.75M16.58 16v-1c0-.41.34-.75.75-.75.42 0 .75.34.75.75v1c0 .41-.33.75-.75.75-.41 0-.75-.34-.75-.75M21 19.25c.41 0 .75.34.75.75s-.34.75-.75.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

CityRegularDuotone.displayName = 'CityRegularDuotone';

// Triple export pattern
export { CityRegularDuotone, CityRegularDuotone as CityRegularDuotoneIcon, CityRegularDuotone as SiCityRegularDuotone };
export default CityRegularDuotone;
export type { CityRegularDuotoneProps };
