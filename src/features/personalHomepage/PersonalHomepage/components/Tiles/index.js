import { Bullet } from "../../gfx";
import { Title, TitleWrapper } from "../Title";
import {
    ColoredTitle,
    Description,
    GridList,
    GridListItem,
    LinkList,
    LinkListItem,
    LinkListLink,
    StyledBorderedTile,
    StyledTile,
    ListItemText,
} from "./styled";

export const Tile = ({ title, children, list }) => {
    return (
        <StyledTile>
            {title && <TitleWrapper><Title>{title}</Title></TitleWrapper>}
            {children && <Description> {children} </Description>}
            {list &&
                <GridList>{
                    list.map((listItem, index) => {
                        return (
                            <GridListItem key={index}>
                                <Bullet />
                                <ListItemText>
                                    {listItem}
                                </ListItemText>
                            </GridListItem>
                        );
                    })
                }</GridList>
            }
        </StyledTile>
    );
}

export const BorderedTile = ({ title, children, repo }) => {
    return (
        <StyledBorderedTile>
            {title && <LinkListLink href={repo}><ColoredTitle>{title}</ColoredTitle></LinkListLink>}
            <Description>
                {children}
            </Description>
            <LinkList>
                {repo &&
                    <LinkListItem>
                        LINK: <LinkListLink href={repo}>{repo}</LinkListLink>
                    </LinkListItem>
                }
            </LinkList>
        </StyledBorderedTile>
    );
}

