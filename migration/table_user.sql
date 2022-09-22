CREATE TABLE public."table_user" (
    id uuid NOT NULL DEFAULT uuid_generate_v4(),
    first_name varchar NOT NULL,
    last_name varchar NOT NULL,
    email varchar NOT NULL,
    last_login_on timestamptz NULL,
    created_by uuid NOT NULL,
    created_on timestamptz NOT NULL,
    updated_by uuid NULL,
    updated_on timestamptz NULL,
    CONSTRAINT user_email_unique UNIQUE (email),
    CONSTRAINT user_pk PRIMARY KEY (id)
);