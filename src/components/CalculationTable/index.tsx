import './calculationTable.css';

const CalculationTable = () => {
  const handleEdit = (itemName: string, event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    alert(`Edit ${itemName}`);
  };

  return (
    <table className='technical-table'>
      <thead>
        <tr>
          <th>Technical</th>
          <th>%</th>
          <th>Quantity</th>
          <th>Rate</th>
          <th>Value</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Paraquate Tech</td>
          <td>42</td>
          <td>57.14</td>
          <td>225.00</td>
          <td>12857.14</td>
          <td>
            <button onClick={event => handleEdit('Paraquate Tech', event)}>Edit</button>
          </td>
        </tr>
        <tr>
          <td>MEG</td>
          <td>4</td>
          <td>4.00</td>
          <td>90.00</td>
          <td>360.00</td>
          <td>
            <button onClick={event => handleEdit('MEG', event)}>Edit</button>
          </td>
        </tr>
        <tr>
          <td>Water</td>
          <td>38.86</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>
            <button onClick={event => handleEdit('Water', event)}>Edit</button>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={4}>Total Value</td>
          <td>13217.14</td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default CalculationTable;
