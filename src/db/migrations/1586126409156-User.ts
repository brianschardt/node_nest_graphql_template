import {MigrationInterface, QueryRunner} from "typeorm";

export class User1586126409156 implements MigrationInterface {
    name = 'User1586126409156'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "User" ("userKey" SERIAL NOT NULL, "email" text NOT NULL, "password" text NOT NULL, "firstName" text, "lastName" text, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_4a257d2c9837248d70640b3e36e" UNIQUE ("email"), CONSTRAINT "PK_dfe98bf091c3eee43fc9e957822" PRIMARY KEY ("userKey"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "User"`, undefined);
    }

}
