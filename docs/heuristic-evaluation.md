# Little Lemon Heuristic Evaluation

## Template 1

| Heuristic | Problem | Severity |
| --- | --- | --- |
| Visibility of system status | Booking confirmation is shown after successful submission. | S0 |
| Match between system and real world | Reservation fields use familiar restaurant terms: date, time, guests, and occasion. | S0 |
| Error prevention | HTML5 validation and JavaScript validation prevent empty dates, invalid times, and guest counts outside 1-10. | S0 |
| Consistency and standards | Navigation, buttons, labels, and form controls use consistent styling and semantic markup. | S0 |
| Recognition rather than recall | Available and booked time slots are visible next to the form. | S1 |
| Accessibility | Labels map to inputs, semantic sections are used, and the submit button includes an aria-label. | S0 |

## Template 2

| Problem | Fix Rating | Notes |
| --- | --- | --- |
| Users may want clearer confirmation details, such as selected date and time. | E3 | Confirmation page can display submitted booking data in a later update. |
| Form errors currently rely on browser validation behavior. | E2 | Inline validation messages would improve visibility and recovery. |
| Mobile users may need a more compact booking slot list. | E3 | Existing responsive layout stacks columns; further refinement is minor. |
