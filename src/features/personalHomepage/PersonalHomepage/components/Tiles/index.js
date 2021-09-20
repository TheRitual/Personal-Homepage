import { Bullet } from "../../icons";
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

export const BorderedTile = ({ title, children, links }) => {
    return (
        <StyledBorderedTile>
            {title && <ColoredTitle>{title}</ColoredTitle>}
            <Description>
                {children}
            </Description>
            {links &&
                <LinkList>{
                    links.map((link, index) => {
                        return (
                            <LinkListItem key={index}>
                                {link.description}:<LinkListLink href={link.link}>{link.link}</LinkListLink>
                            </LinkListItem>
                        )
                    })
                }</LinkList>
            }
        </StyledBorderedTile>
    );
}

