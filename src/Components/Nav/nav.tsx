import s from './Nav.module.css';
import {Countries, CountriesInterface} from '../../Helpers/Countries';
import {NavLink} from 'react-router-dom';

const Nav = () => {
    return (
        <div className={s.block}>
            {Countries.map((el: CountriesInterface) => {
                return (
                    <NavLink key={el.code} to={`/country/${el.code}`}>
                        {({ isActive }) => (
                            <div className={`${s.address}` }>
                                <img className={s.image} src={el.img} alt={el.name} />
                                <span className={`${isActive && s.active}`}>{el.name}</span>
                            </div>
                        )}
                    </NavLink>
                )
            })}
        </div>
    );
}
    ;

    export default Nav;