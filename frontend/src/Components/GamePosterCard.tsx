import { GameSummarySimple } from "../Types"
type props = {
    game: GameSummarySimple,
    page: string
}

const GamePosterCard = ({ game, page }: props) => {
    const { name, coverUrl } = game;

    const goToPage = () => {
        console.log(name)
    };

    let poster = <img className="h-64 mx-4" src={coverUrl} onClick={goToPage}></img>;

    switch(page) {
        case "FrontPage": {
            poster = <img className="w-11/12 mx-4" src={coverUrl} onClick={goToPage}></img>
            break;
        }
        case "SearchPage": {
            poster = <img className="w-11/12 mx-4 max-h-60" src={coverUrl} onClick={goToPage}></img>
            break;
        }
        default: {
            poster = <img className="w-11/12 mx-4" src={coverUrl} onClick={goToPage}></img>
        }
    }

    return (
        <>
            {poster}
        </>
    )
}

export default GamePosterCard