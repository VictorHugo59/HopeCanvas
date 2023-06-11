import { Button, Input, Modal } from '@gear-js/ui';
import { ChangeEvent, FormEvent, useState } from 'react';
import { modalStyles } from 'components/modals';
import { AuctionFormValues } from 'types';

type Props = {
  close: () => void;
  onSubmit: (values: AuctionFormValues, onSuccess: () => void) => void;
};

function AuctionModal({ close, onSubmit }: Props) {
  const [values, setValues] = useState({ minPrice: '', duration: '', bidPeriod: '' });
  const { minPrice, duration, bidPeriod } = values;

  const handleChange = ({ target: { value, name } }: ChangeEvent<HTMLInputElement>) => {
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (minPrice && duration && bidPeriod) onSubmit(values, close);
  };

  return (
    <Modal heading="Auction"  close={close} >
      <form className={modalStyles.form} 
      onSubmit={handleSubmit}
      style={{color:"black"}}>
        <Input type="number" 
        style={{fontSize:"18px",color:"rgb(97,103,200)",backgroundColor:"rgb(242,242,242)", paddingTop:"7px",paddingBottom:"7px",borderColor:"rgb(97,103,200)",borderRadius:"5px",borderStyle:"ridge",borderWidth:"2px"}}
        placeholder="min price" 
        name="minPrice" 
        value={minPrice} 
        onChange={handleChange} />

        <Input type="number" 
        style={{fontSize:"18px",color:"rgb(97,103,200)",backgroundColor:"rgb(242,242,242)", paddingTop:"7px",paddingBottom:"7px",borderColor:"rgb(97,103,200)",borderRadius:"5px",borderStyle:"ridge",borderWidth:"2px"}}
        placeholder="duration (min)" 
        name="duration" value={duration} 
        onChange={handleChange} />

        <Input
          type="number"
          style={{fontSize:"18px",color:"rgb(97,103,200)",backgroundColor:"rgb(242,242,242)", paddingTop:"7px",paddingBottom:"7px",borderColor:"rgb(97,103,200)",borderRadius:"5px",borderStyle:"ridge",borderWidth:"2px"}}
          placeholder="bid period (min)"
          name="bidPeriod"
          value={bidPeriod}
          onChange={handleChange}
        />

        <Button 
        style={{fontSize:"24px",color:"rgb(97,103,200)",backgroundColor:"rgb(242,242,242)",borderColor:"rgb(97,103,200)",borderRadius:"10px",borderStyle:"ridge",borderWidth:"3px"}}
         type="submit" 
         text="Start auction" block 
         />
      </form>
    </Modal>
  );
}

export { AuctionModal };
