
export default class Fact {
    _id:     string;
    text:    string;
    user:    User;
    upvotes: Upvote[];
}

export class Upvote {
    user: string;
}

export class User {
    _id:  string;
    name: Name;
}

export class Name {
    first: string;
    last:  string;
}
