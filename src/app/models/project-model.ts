export class Project {
    name: string;
    id: string;
    image: string;
    tags: Tag[];
    description: string;
    links: Link[];
}

export class Tag {
    name: string;
    icon: string;
    color: string;
}

export class Link {
    icon: string;
    url: string;
    tooltip: string;
}