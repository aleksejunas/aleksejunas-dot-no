feat: consolidate and fix delete blog post buttons with unified DeletePostButton

## Summary
This commit addresses two major issues in the delete functionality:
1. **Consolidation**: Removes confusion from having 3 different delete implementations
2. **Critical Fix**: Resolves nested forms HTML validation error

## Phase 1: Consolidation (Original Work)

### Problems Fixed
- Had 3 different delete button implementations causing confusion
- Inconsistent styling and behavior across delete operations
- Duplicate buttons on the same page
- Wrong action prop usage in some places

### Changes Made
- **Enhanced DeletePostButton component** with ActionButton support via `useActionButtonStyle` prop
- **Removed 3 duplicate delete buttons** from blog post page
- **Updated admin blog page** to use consistent DeletePostButton component
- **Fixed action prop usage** to use `deletePostAction` instead of raw `deletePost`
- **Maintained confirmation dialogs** on all delete operations
- **Cleaned up unused imports and functions**

## Phase 2: Critical Fix (Nested Forms Issue)

### The Problem
❌ **Nested forms are invalid HTML** - The original approach had forms inside buttons, which is not allowed:
```html
<!-- INVALID HTML - This was the problem -->
<form>
  <DeletePostButton>
    <form>...</form>  <!-- Nested form! -->
  </DeletePostButton>
</form>
```

### The Solution
✅ **Restructured to direct server action calls** - No forms needed:
```jsx
// NEW APPROACH - Valid HTML
<DeletePostButton 
  postId={post.id} 
  action={deletePostAction}
/>

// Inside the component:
const handleDelete = () => {
  const formData = new FormData();
  formData.append("postId", postId);
  startTransition(() => {
    action(formData); // Direct call!
  });
}
```

### Technical Changes
- **Completely restructured DeletePostButton** to eliminate nested forms
- **Replaced form-based approach** with direct server action calls
- **Added proper loading state** using `useTransition`
- **Removed DeletePostForm component** that was no longer needed
- **Maintained all functionality** while fixing HTML validation

## Benefits

✅ **Valid HTML** - No more nested forms (critical fix)
✅ **Consistent UI/UX** - Single DeletePostButton component
✅ **Better performance** - Direct server action calls
✅ **Loading state** - Disables button during deletion
✅ **Flexible styling** - Supports ActionButton and text styles
✅ **Safety first** - Confirmation dialogs maintained
✅ **Cleaner code** - Removed duplicate implementations

## Files Modified

### Updated Files:
- `src/components/buttons/DeletePostButton.tsx` - Completely restructured
- `src/app/blog/[slug]/page.tsx` - Cleaned up duplicate buttons
- `src/app/admin/blog/page.tsx` - Updated to use consistent DeletePostButton
- `docs/project-map.md` - Added documentation

### Removed Files:
- `src/components/buttons/DeletePostForm.tsx` - No longer needed

## Usage Examples

```jsx
// Prominent delete button (admin pages)
<DeletePostButton postId={post.id} action={deletePostAction} useActionButtonStyle={true} />

// Subtle delete button (lists)
<DeletePostButton postId={post.id} action={deletePostAction} useActionButtonStyle={false} />
```

## Migration Guide

If you were using the old approach with forms:

```jsx
// OLD (BROKEN - nested forms)
<form action={deletePostAction}>
  <input type="hidden" name="postId" value={post.id} />
  <button type="submit">Delete</button>
</form>

// NEW (FIXED - direct call)
<DeletePostButton postId={post.id} action={deletePostAction} />
```

## Testing

- ✅ Code compiles without errors
- ✅ ESLint passes (only 3 unrelated warnings)
- ✅ No nested forms HTML validation issues
- ✅ Both button styles work correctly
- ✅ Confirmation dialogs function properly
- ✅ Loading state works during deletion

## Related Issues

This addresses:
1. Original issue: "I have 3 functions/buttons to delete blog-posts. I can't even figure out which are which"
2. Follow-up issue: "The deletepostbutton does not work. Nested forms are not allowed"

## Why This Approach is Better

1. **No HTML Validation Errors**: Eliminates nested forms completely
2. **Simpler Architecture**: Direct server action calls are cleaner
3. **Better UX**: Loading state prevents double-clicks
4. **Maintainable**: Single component, single responsibility
5. **Flexible**: Supports different styling needs via props