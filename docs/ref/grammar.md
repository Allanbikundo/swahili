### Grammar

This will be updated as the language develops

| Node           | Constituents                                          |
| :------------- | :---------------------------------------------------- |
| **statements** | NEWLINE* `statement` (NEWLINE+ `statement`)*          |
| **statement**  | KEYWORD:RUDISHA `expr`?                               |
|                | KEYWORD:ENDELEA                                       |
|                | KEYWORD:ONDOKA                                        |
|                | IDENTIFIER EQ `expr`                                  |
|                | `expr`                                                |
| **expr**       | KEYWORD:WACHA IDENTIFIER EQ `expr`                    |
|                | `comp-expr` ((AND\|OR) `comp-expr`)\*                 |
| **comp-expr**  | NOT `comp-expr`                                       |
|                | `arith-expr` ((EE\|LT\|GT\|LTE\|GTE) `arith-expr`)\*  |
| **arith-expr** | `term` ((PLUS\|MINUS) `term`)\*                       |
| **term**       | `factor` (MUL\|DIV\|MOD) `factor`)\*                  |
| **factor**     | (PLUS\|MINUS) `factor`                                |
|                | `power`                                               |
| **power**      | `call` (POW `factor`)\*                               |
| **call**       | `atom` (LPAREN (`expr` (COMMA `expr`)\*)? RPAREN)?    |
| **atom**       | INT\|FLOAT\|STRING\|IDENTIFIER                        |
|                | LPAREN `expr` RPAREN                                  |
|                | `list-expr`                                           |
|                | `if-expr`                                             |
|                | `for-expr`                                            |
|                | `while-expr`                                          |
|                | `func-def`                                            |
| **list-expr**  | LSQUARE (`expr` (COMMA `expr`)\*)? RSQUARE            |
| **if-expr**    | KEYWORD:KAMA `expr` LCURL                             |
|                | (`statements` RCURL `if-expr-b`\|`if-expr-c`?)        |
| **if-expr-b**  | KEYWORD:AU `expr` LCURL                               |
|                | (`statements` RCURL `if-expr-b`\|`if-expr-c`?)        |
| **if-expr-c**  | KEYWORD:SIVYO LCURL `statements` RCURL                |
| **for-expr**   | KEYWORD:KWA IDENTIFIER EQ `expr` KEYWORD:MPAKA `expr` |
|                | (KEYWORD:HATUA `expr`)?                               |
|                | LCURL `statements` RCURL                              |
| **while-expr** | KEYWORD:AMBAPO `expr` LCURL `statements` RCURL        |
| **func-def**   | KEYWORD:SHUGHULI IDENTIFIER?                          |
|                | LPAREN (IDENTIFIER (COMMA IDENTIFIER)\*)? RPAREN      |
|                | LCURL `statements` RCURL                              |
