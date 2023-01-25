import { FilterField} from './Filter.styled';
import { Input, Label } from 'components/ContactForm/ContactForm.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/FilterSlice'

export const Filter = () => {
    const dispatch = useDispatch();

    return (
        <FilterField>
            <Label>
            Find contacts by name
            <Input type="text" name="filter" onChange={event => dispatch(setFilter(event.target.value))} />
            </Label>
        </FilterField>
    );
};