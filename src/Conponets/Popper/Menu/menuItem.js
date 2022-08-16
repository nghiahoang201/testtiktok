import Button from '../../Button';

function MenuIteam({ data }) {
    return (
        <Button leftIcon={data.icon} to={data.to}>
            {data.title}
        </Button>
    );
}

export default MenuIteam;
