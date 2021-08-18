import { useMemo } from 'react';

import { IData } from '../resources/data';
import items from '../resources/data/data.json';

export default function useData() {
  const data: IData = useMemo(() => items, []);

  return data;
}
