import { Button, FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import CalculationTable from '../../components/CalculationTable';

interface FormValues {
  name: string;
}

const CalculationsCreateEdit = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = values => {
    console.log('🚀 ~ CalculationsCreateEdit ~ values:', values);
  };

  return (
    <div>
      <h1>Create New Calculation</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={!!errors.name}>
          <FormLabel htmlFor='name'>Calculation Name</FormLabel>
          <Input
            id='name'
            placeholder='name'
            {...register('name', {
              required: 'Please provide a valid name.',
            })}
          />
          <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
        </FormControl>
        <Button style={{ margin: '20px 20px 10px 20px' }} type='button'>
          + Dynamic Technical
        </Button>
        <Button style={{ margin: '20px 20px 10px 20px' }} type='button'>
          + Fixed Technical
        </Button>
        <CalculationTable />
        <Button mt={20} isLoading={isSubmitting} type='submit'>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default CalculationsCreateEdit;
