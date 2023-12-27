export type ApiData = {
  disabled: boolean;
  isRequired: boolean;
  label: string;
  name: string;
  type: string;
  value: string;
};

export type ApiBody = Array<ApiData>;

export default async function getFormData(): Promise<ApiBody> {
  const res = await fetch('https://run.mocky.io/v3/c7a96306-c122-4037-8b27-a2120b9e6f04');

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const body: ApiBody = await res.json();

  for(const item of body) {
    if(!item.value) {
      item.value = '';
    }
  }
  
  return body;
}