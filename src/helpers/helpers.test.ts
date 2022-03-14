import mock from './__mocks__/mock.json';
import filter from '.';
import { Player } from '../interfaces';

describe('Helpers', () => {
  it('Should filter correctly with expected result', () => {
    const expectedResult = [
      [
        {
          first_name: 'Brevin',
          h_in: '70',
          h_meters: '1.78',
          last_name: 'Knight'
        },
        {
          first_name: 'Nate',
          h_in: '69',
          h_meters: '1.75',
          last_name: 'Robinson'
        }
      ],
      [
        {
          first_name: 'Mike',
          h_in: '70',
          h_meters: '1.78',
          last_name: 'Wilks'
        },
        {
          first_name: 'Nate',
          h_in: '69',
          h_meters: '1.75',
          last_name: 'Robinson'
        }
      ]
    ]
    const result = filter({
      arr: mock.values,
      input: '139',
    });
    expect(result).toStrictEqual(expectedResult);
  });

  it('Should not add duplicated player by first_name', () => {
    const mockData: Player[] = 
      [
        {
          first_name: 'Brevin',
          h_in: '70',
          h_meters: '1.78',
          last_name: 'Knight'
        },
        {
          first_name: 'Brevin',
          h_in: '70',
          h_meters: '1.78',
          last_name: 'Knight'
        },
        {
          first_name: 'Artur0',
          h_in: '70',
          h_meters: '1.78',
          last_name: 'Castro'
        },
      ];
    const result = filter({
      arr: mockData,
      input: '140',
    });
    const expectedResult =  [
      [
        {
          first_name: 'Brevin',
          h_in: '70',
          h_meters: '1.78',
          last_name: 'Knight'
        },
        {
          first_name: 'Artur0',
          h_in: '70',
          h_meters: '1.78',
          last_name: 'Castro'
        }
      ]
    ];
    expect(result).toStrictEqual(expectedResult);
  });
});