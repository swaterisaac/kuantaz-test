'use client';

import { useSearchParams } from 'next/navigation';
import Wrapper from './Wrapper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

export default function FormData() {
  const queryParams = useSearchParams();

  return (
    <Wrapper>
      <List>
        {Array.from(queryParams.keys()).map(key => (
          <ListItem key={key}>
            <p>
              <b>{key}:</b> {queryParams.get(key)}
            </p>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
}