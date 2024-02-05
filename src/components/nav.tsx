'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ROUTES } from '@/config/routes';
import styled from 'styled-components';

export const Nav = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul>
        {ROUTES.map((route) => (
          <ListItem key={route.label}>
            <StyledLink
              className={`${pathname === route.path ? 'active' : ''}`}
              href={route.path}
            >
              {route.label}
            </StyledLink>
          </ListItem>
        ))}
      </ul>
    </nav>
  );
};

const ListItem = styled.li`
  list-style: none;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  padding: 12px 0;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    height: 1px;
    bottom: 7px;
    left: 0;
    right: 0;
    background-color: #fff;
    transform: scaleX(0);
    transition: all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  &.active,
  &:hover {
    &::after {
      transform: scaleX(1);
    }
  }
`;
