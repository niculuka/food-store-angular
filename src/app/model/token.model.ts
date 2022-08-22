export class Token {
    tokenId!: number;

    confirmedAt!: Date;
    createdAt!: Date;
    expiresAt!: Date;
    
    token!: string;
    userIdFk!: number;
}