The Post-Self MUCK is an avenue for exploring the setting through roleplay. You can join us as a cladist on the Lagrange System in the year 2403 etc etc skunks write more here plox

## Where Am I?

This is the System, and you are a cladist, defined by your ability to fork into several duplicates of yourself on a whim, to merge or individuate as you will, and to live at ease in this consensual dream.

This MUCK is a roleplaying community meant to bring together those various readers of [Post-Self.ink](https://post-self.ink) who are interested in telling stories set in this world.

For those familiar with the setting, it is important to take note of the particular time and place in which we write: It is Systime 279, several years after the Century Attack that resulted in the irrevocable loss of approximately 1% of all instances on the Lagrange System.

## The First Minutes

Let us begin with an FAQ:

### How do I get out of here?

You can view various `sims` and `links` using their respective commands. Simply entering the name of one of them will send you to its destination.

If you just want out, your best bet is to write `square`.

### How do I talk?

The simple answer is `say <words>`. Sometimes what you want is to `pose <action>`. You can write `" <words>` instead of `say`, and `; <action>` instead of `pose`.

If you want your message not to begin with your name, you can use `@emit <narration>` or `\ <narration>` instead.

There is also `ooc <words>`, which will accept the format `ooc ; <action>`.

Lastly, you may have noticed the **[Public]** channel. You can participate by writing `pub <words>` or `pub ; <action>`.

### What should I do now?

You already know enough to jump in and roleplay! But the MUCK environment has so much more to offer.

You could, for instance, decide to write an `@desc me = <paragraph>` that people can see by at `look`ing at you. Use `%r` in place of newlines if you want multiple paragraphs.

## The First Hour

We should talk about getting around and communicating with others remotely.

### Join / Call

When you want to teleport to someone in particular, you can request to `join <player>` them. Alternatively, if you want to bring them to you, you can `call <player>` them.

If you receive such a request, you answer it with the same commands; the notification will generate the command for you, which you can paste into your input if you prefer.

### Page

You can read more detailed documentation for this command by writing `help page`, but the simplest case is `page <player> = <message>`. This lets you send a private message to someone. You can also `page <player> = ; <action>` to perform a page-pose.

### Exits

Exits are like doors. You can go through one by entering its name as a command. If there is an underlined part of the name, that is probably an abbreviation that will also work.

There should always be an exit called **<u>B</u>ack** that takes you closer to the central area in a given sim. **<u>O</u>ut** should likewise take you closer to the figurative street.

## The First Day

Now we are getting into the thick of settling in!

### Creating A Home

You should read `help @dig` for more details, but it is enough to write `@dig/teleport <name>` followed by `@link me = here`. This will create a new room and make it your `home`.

You can set an `@desc here = <paragraph>` for the room just like you set for yourself.

### Lost And Found

If you ever lose track of your things, you can use `@find` or `@search` to retrieve their DBRefs, which will work in commands no matter where you are in the System.

This is especially handy to `@teleport me = <DBRef>` to a room you own, or to `@tel <DBRef> = me` something you own into your `inventory`.

### Inventory Items

You can `@create <name>` a new object, which will appear in your inventory. You can `@desc` it, `@link <name> = me` it to yourself so it returns to you when sent home, `drop <name>` or `take <name>` it, `@lock <name> = me` it so only you can move it, and `@set <name> = <path>:<data>` its attributes.

Such an object is not particularly useful on its own, but there are clever things you can do with them if you are willing to get acquainted with softcode.

## The First Week

Finally, we should talk about building.

### Connecting Rooms

If you own two rooms and you want to connect them, you will need to `@open <directions> = <destination>, <returning directions>` a new exit.

For example, you might write,

    @open %xuE%xnast; east; e = #1234, %xuW%xnest; west; w

This creates an exit where you stand called **<u>E</u>ast** that takes you to DBRef #1234, and a reciprocal exit called **<u>W</u>est** that returns to where you stand.

### Thinking About ANSI

Those percent signs were probably a little scary. You can read more about them with `help ansi substitution`. You can experiment with them using the `think <command>`, which will simply spit whatever you write back at you after evaluating any substitutions.

It is important to note that each client will show ANSI differently, if it supports it at all. Treat this as pretty garnish, and avoid colors entirely. The ones you are likely to use are `%xu` for underlining, `%xh` for bold, and `%xn`, which resets any styling.

You may be pleased to learn that these all work virtually anywhere, including when you speak!

## Forks

This is the System! Of **course** you can fork! Here is how that works:

### The Fork Command

Simply `fork [tag]` to produce a duplicate of yourself. If you do not include a tag, one will be randomly-generated instead.

This fork inherits nearly everything about you, in- and out-of-character. There are some technical limitations, however.

For one, a fork-of-a-fork can be made, but it will technically end up as your direct up-tree. This should not matter mechanically; it just makes things easier under the hood. Roleplay can do the rest.

The other catch is to do with individuation, which requires a different approach to controlling your fork. It is better to create another character if you intend to have a fork take on a new name. Your memories can be copied over by a `Wizard`.

### Wrangling Forks

To control a fork, you can write `> <tag> = <command>`. It will automatically set your default fork, which can be controlled by writing just `> <command>`. A fork can `quit`, which will automatically send a `merge` request to you.

### Memories

You can save a new memory by writing `memo [paragraph]`. If you do not include any text after the command, it will list all of your memories instead.

Memory merges **are** currently saved, but the command to address them has not yet been implemented. In the future, there will also be a `recall <filter>` command, which will let you search your memories for specific words.

## Softcode

Softcode is where things start to get real interesting, but to be perfectly honest, if you are not prepared to grind your nose against it for several hours, it is probably not the feature for you. You can ask for help from a `Wizard` if you need, of course, but it will take time for you to get comfortable using it. Be patient with yourself; this stuff is hard.

You can find an API containing most of the functions you can use on [the TinyMUX wiki](https://wiki.tinymux.org/index.php/Softcode_functions). You can also use `help <function()>` in the case of those many pages that were never copied onto the website.

Softcode is braided into plaintext to produce dynamic output. For instance, you could make your hair a different color every time someone looks at it, or create a watch that actually shows the time. You could make clothes that alter your description when put on, or a door that leads to a different destination based on the time of day. Softcode is flexible, but it is also kind of a pain to use.

Here is an example of how to use softcode:

    think Two plus two equals [\spellnum( \add(2, 2) )]!

This will output:
    
> Two plus two equals four!

The only unique function this MUCK has so far is `systime()`, which simply outputs the in-character time like so: `279+270.43`.

These manuals have been given the `Visual` flag so that you can study how they work, if you need more examples. You can look into their inner workings with `examine <target>`.

## Pronouns

TinyMUX's built-in substitutions for pronouns are not great, so we have implemented our own.

### Setting Up Pronouns

You can write `pronouns` to see a list of all presets we have already. If what you are looking for is not there, feel free to ask a `Wizard` for help.

You may note that there are `Singular` and `Plural` options as well; these are important for setting up the grammar used when referring to you.

To select a preset, write `pronouns <preset>` and verify that the test string displays correctly.

**Using Pronouns**
Virtually any text can include substitutions, and the functions are named so that they should be fairly readable. For example, if you have pronouns set to feminine:

    [they(%#, 1)] [has(%#)] [they(%#)] / [them(%#)] pronouns.

will produce the output:
    
> she has she / her pronouns.

You can read about `%#` in `help substitutions`. Also, take note of the extra parameter in that first substitution, `[they(%#%xh, 1``)]`. This is how you capitalize a substituted word.

### Pronoun Functions

These are the commands for inserting pronouns in your text using softcode.

`they()`, `them()`, `their()`, `theirs()`, `themself()`

### Conjugation Functions

These are the commands for properly conjugating verbs using softcode.

* ss()	 : `[they(%#)] walk[ss(%#)]`	= they walk	/	ey walks
* es()	 : `[they(%#)] go[es(%#)]`	= they go	/	ey goes
* is()	 : `[they(%#)] [is(%#)]`		= they are	/	ey is
* was()	 : `[they(%#)] [was(%#)]`		= they were	/	ey was
* has()	 : `[they(%#)] [has(%#)]`		= they have	/	ey has

## Differences for users coming from MUCKs

* Instead of the `who`/`WHO` dichotomy, you can see who is in the room with you with `lwho`
* Instead of `spoof <text>`, use `\ <text>`
* You can still use `:` for posing. If you want the text to abut your name in poses (like for adding `'s`), use `;`. 
