---
title: Syntax
---

Throughout this section, the various parts of the grammar of Nanon would be described, along with small examples. The examples will talk about you, your dog, a friend named Joseph, and his dog. Not a terribly interesting storyline, but hopefully it'll explain the subjects of the section. This section assumes you've at least glanced at the [Morphology](/morphology) section.

## Simple phrases

Being an inflecting language, Nanon has a fairly free word order, but phrases tend to go VSO - verb, subject, object. You can tell what's going on, who's doing it, and, if needed, who it's being done to. That's just putting it roughly, of course, but we're still in the simple phrases section, so we won't get into stuff like doing something with someone else to someone and their dog quite yet.

### The simplest example

The most basic example is a statement containing just a verb and a subject in the present tense.

> Mabåti les.

You've already seen *mabåt*, which means walk. We know that the *-i* suffix turns it into the verb 'to walk'. *Les* is the personal pronoun of rht efirst person 'I'. This simple example means "I walk."

### Adding an object

It'd be nigh impossible to talk in sentences like that, though; we need objects. If we're going to have objects, though, we're going to need to make the verb transitive. Keeping with the theme of you and your dog, we'll make the dog the object, since that's usually what a person walks:

> Mabåtier les henånam.

We have our *les* and our *mabåti*,  but with the addition of *-er*, the transitive suffix. The word for dog is henån, but the one in this example has the suffix *-am*. This is the accusative suffix, which makes the word the direct object of the verb. So our sentence means "I walk the dog". *N.B: Nanon does not, as yet, differentiate between definite and indefinite verbs - there is no way to say 'the dog' vs 'a dog'.*

### Showing possession

"I thought we were talking about my dog..." Well, for that, we have to learn a new case. A case is a variation on the root word. Nanon has three cases: nominative (the root word by itself - "the/a \_\_\_"), the accusative (the root word plus *-am* - the object of the verb), and the new one: genitive (the root word plus *-en* - "of (the/a) \_\_\_"). So if we want to talk about our dog, we'll add a genitive form of "I" to make it "my":

> Mabåtier les henånam lesen.

Notice how the *lesen* follows the *henånam*; we wouldn't want to say "I of me walk the dog". This is one of the few places where word order matters in Nanon. Thus, "I walk the dog of me".

## Joining phrases

There are a few ways to join phrases in Nanon: you can uses the standard conjunctions, or the list modifiers. Standard conjunctions are almost completely like English, with the conjunction separating the two nouns (they still have some differences, as we'll see). List modifiers are the first modifiers you'll learn to use; they join (usually) three or more nouns together into an and-list, an or-list, a xor-list, or a negative-or-list.

### Standard conjunctions

The standard conjunctions were cribbed mostly from Latin. Because of their origin, these conjunctions are fairly similar to those of English except for one or two differences: a few of the conjunctions use the word twice, and one of the conjunctions doesn't exist in English as one word (it does, however, exist in most computer languages).

The first conjunction we'll use will be *ate*, which means "and".

> Mabåti les ate henån lesen.

We've got the standard lineup: you and your dog. This time, however, you're not walking your dog, you're walking with it, so the verb isn't transitive. This one's fairly easy: "My dog and I walk".

What if you're not walking your dog, though? What if your friend Joseph is? Or both of you together?

> Mabåtier les ite Josef henånam lesen.

Now that the dog is back to being walked, we're back to transitive, and we need to see who's walking it: you or Joseph (spelled 'Josef' in Nanon). *Ite* is slightly different than in English, in that it's intrinsically inclusive. That is, if something is or'd in Nanon, it means that one, the other, or both together may be doing the action. Exclosive or, or xor, doesn't have a direct counterpart in English, but the closest example is "either X or &, but not both". In computers or logic, this is represented as `(X xor Y)`. In Nanon, it's represented as *ete X ete Y* - there are two *ete* because that was one of the parts copied from Latin.

Now let's change the previous example and say you don't want to go walking with Joseph, but you'll let him walk your dog:

> Mabåtier ete les ete Josef henånam lesen.

There: "Either Joseph or I (but not both together) walk my dog". To negate this, you can use the negative form *nete* for "neither X nor Y":

> Mabåtier nete les nete Josef henånam lesen.

### List modifiers

List modifiers connect a series of words, phrases, or sentences (depending on the global affix) by surrounding them like parentheses. Depending on the modifiers, there is one for each conjunction, the words are connected in different ways: words connected with the 'and' modifier *atek...atet* act like a string of words connected by 'and'. and likewise for the rest of the modifiers: *itek...itet* for 'or', *etek...etet* for 'xor', and *netek...netet* for 'neither/nor'.

List modifiers are the standard conjunctions with *-k* appended to the opening modifier and *-t* appended to the closing one. Keeping with our walks, let's all go for one:

> Mabåti atek les, Josef, henån lesen atet.

By surrounding the list with the 'and' modifier, we connected all of the words with 'and', leaving us with "Me and Joseph and my dog walk". This example includes commas, like in English. We can make it a riddle as to who's walking by switching to 'or', which specifies that any combination of the subjects walks:

> Mabåti itek les, Josef, henån lesen, henån Josefen itet.

We've added Joseph's dog to the mix: "I, Joseph, my dog, or Joseph's dog (or any combination thereof) walk".

## Compound phrases

Conjoining phrases works very similarly to conjoining nouns, but uses a prefix to modify the conjunctions such that they apply to phrases.

### Conjoining phrases

> Nanoni les inate mabåti Josef.

It makes sense that if *Nanon* is a noun, and a Nanon word itself, it can also be a verb. In this case, it means 'to speak'. Here, we've used the prefix *in-* to cause the conjunction to apply on a phrase scope. In slangy speech, this can be dropped, as it's often evident from context. Here, we have "I talk and Joseph walks".

Let's add a conjunction: *ato*. It looks a lot like *ate* and works rather like 'and', however, it expects a truth statement following it. In English, it's called 'but' (*ete* can similarly be changed to *eto*, which means 'except'):

> Nanoni les inate mabåti Josef ato roevi avles.

In the above example, we use the prefix *av-* (from *av* - 'two') to indicate a dual state - thus, when combined with *les*, we get *we both*. (On that note, the plural prefix, *es-* comes from *es* - 'three', which simply indicates a plurality). Therefore, *avles* means 'we both'. *Roevi* (from *roev* - 'tree') means 'grow', so here we have the rather saccharine "I speak and Joseph walks but we both grow".

### Lists of phrases

It follows that we can apply this to list modifiers as well. These, however, do require the phrase scope prefix *in-*.

> Inatek nanoni les, mabåti Josef, henåni henan Josefen inatet.

The verb form of dog is 'to wag', so that makes our sentence "I talk, Joseph walks, and Joseph's dog wags."

## Questions

We have Yet Another Affix to deal with, which creates a question. This addition, however, is an infix which only occurs in six words: *bronum* - 'place, location', *loran* - 'time', *lubåt* - 'reason', *dedev* - 'person', *uchlas* - 'it, thing' (neuter 3rd person pronoun), and *båt* - 'way'.  The affix by itself is also a modifier that makes the sentence into a yes or no question, or implies a 'whether'. If the words for 'yes' and 'no' are *ka* and *nu* respectively, that is the expected answer.

### The five W's and the H

The affix/word in question is *aen*. It is how questions are made in Nanon. When combined with certain words, it forms the questions *bronaenum* 'where', *loraenan* - 'when', *lubaenåt* - 'why', *dedaenev* - 'who', *uchlaenas* - 'what, which', and *baenåt* - 'how'.

> Dedaenev mabåti?

"Who walks?"

> Bronaenum mabåti los?

"Where are you walking?" - *los* being the 2nd person pronoun.

> Loraenam za mabåti los?

"When will you walk?" - *za* will be covered in tenses.

> She uchlaenas uchlas mabåti los?

"Towards what thing are you walking?" - *she* being 'towards'.

> Lubaenåt mabåti los?

"Why are you walking?" Really, why are any of us walking?

> Baenåt mabåti les?

"How do I walk?"

### Yes and no

Placing the question modifier before the word that's being questioned (word order important) asks a yes or no question. If you are expecting a a certain response, add that response to the end of the question.

> Aen mabåti los?

"Do you walk?"

> Aen mabåti los, ka?

"You do walk, don't you?"

> Aen za bromuni los, nu?

"You won't go, will you?"

## Tense

This section assumes that you've read the section on modifiers in [morphology](/morphology) first, to get a taste of tense modifiers.

As you know, our tense words are *ze* for past, *zo* for present (though it's usually implied) and *za* for future. You should know also that the suffix *-n* makes the tense perfect, or completed. These words, like most modifiers, default to modifying theverb that they come before, but can modify a phrase or entire sentence with the appropriate prefix. This makes it quite easy to mix tenses within a sentence.

> Za jaruvier los Josefam ze lasi januruvam.

"You will see that joseph was a spy". *Jaruvier* is the transitive verb form of 'see' put into the future tense by *za*. *Ze* puts *lasi* (the verb form of the pronouns becomes the verb 'to be', thus *lasi* - 'they are') in the past tense, so Joseph (who is in the accusative case for *jaruvier*) was in the past a spy, or *januruv*. Joseph and *januruv* are both in the accusative, though, so how do we know which is the object of *lasi*? The answer is that it doesn't matter, because 'to be' in Nanon is like an equal sign: it makes both nouns the same.

Why isn't *za* in its phrase form, *inza*? Because *jaruvier* is transitive, and it still requires its object to be a full phrase. The truth is, you can often use the unmodified version of the modifier in place of the phrase or sentence version, and still have it make sense:

> Ze mabåti les she esroevam, ato inza majarbåti les she estanunam.

Which means "I was walking to the treas, but I will run to the mountains". *Majarbåt* is 'to walk' plus the 'fast' descriptor infixed to make 'to run'. a *tanun* is a mountain, which is plural with the prefix *es-*. The same sentence with the phrase-modified tenses, however, would mean the same thing:

> Inze mabåti les she esroevam, ato inza majarbåti les she estanunam.

## Numbers

Nanon counts in base-10, so the numbers are similar, but they're strung together in an almost Mandarin fashion: the numbers count up to ten, then it's ten plus a number, then for twenty, it's two tens, three tens for thirty, and so on.

0. *'s*
1. *an*
2. *av*
3. *es*
4. *er*
5. *et*
6. *on*
7. *ov*
8. *or*
9. *ur*
10. *ans*
11. *ansan*
12. *ansav*
{: start="0" }

And so on, until 20, which is *avans*, 30 - *esans*, and so on. Here are some random numbers:

* *mans* - 100
* *ant* - 1,000
* *nant* - 10,000
* *mansant* - 100,000
* *anc* - 1,000,000
* *avans es* - 23
* *erans av* - 24
* *ant ermans urans av* - 1,492
* *ant ovmans ovans av* - 1,776
* *anc avmansant esnans erant etmans onans ov* - 1,234,567

*Mans* is different, because otherwise, following the pattern, *onnans* and *onans* would sound alike.

These numbers, by themselves, act as descriptors. If you want to talk about the number two, or number two in a set, precede the number with the word 'number', *sanav*. To say cardinal numbers, put the number in its verb form, as in *Ani Eskorinthev Anses* - First Corinthians 13 (see examples). Also, note the *-ev* suffix on Corinth: this comes from *dedev*, which means person. The *-ev* suffix, therefor, means a person of the noun it modifies, so *-ev* on Corinth means a Corinthian.

### Math

Addition - "Number with number is number"
:   *an tho an lasi av*: 1 + 1 = 2

Subtraction - "Number without number is number"
:   *av nutho an lasi an*: 2 - 1 = 1

Multiplication - "Number by/against number is number"
:   *av lar an lasi av*: 2 * 1 = 2

Division - "Number except number is number"
:   *er eto av lasi av*: 4 / 2 = 2

Exponents - "Number by/against again is number"
:   *av lar'che av lasi er*: 2 ^ 2 = 4

Logarithms - "Number by/against an anonymous thing is number"
:   *ans lar'che t'n mans lasi av*: Log10 100 = 2

Roots - "Number except again root is number"
:   *er eto'che av lasi av*: sqrt(4) = 2

## A note

> Something must be said about the semantics of Nanon, as words separated by one letter become different parts of speech, and mean different things. Nouns and their verb components should not always be taken as near synonyms, even though this may sometimes be the case. For example, a word that means a driver of an automobile does not automatically mean 'to drive an automobile' in it's verb form. It might be best to learn the noun and verb form separately and not think of the -i as an affix, then realize later that there is a connection between the two words.
>
> Also, care must be taken to enunciate certain words carefully, as they may differ by just a vowel. The biggest problem, perhaps, would be the gender prefixes ach- and ech-
